from fastapi import FastAPI, WebSocket, HTTPException, Path, Query, Body
from enum import Enum
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the possible statuses using an enum
class Status(str, Enum):
    submitted = 'submitted'
    processing = 'processing'
    complete = 'complete'

# Mocked responses based on status
mocked_responses = {
    Status.submitted: "../assets/response-1.json",
    Status.processing: "../assets/response-2.json",
    Status.complete: "../assets/response-3.json"
}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            # Receive status from client
            status = await websocket.receive_text()
            # Check if the status is valid and notify the client
            if status in mocked_responses:
                await websocket.send_text(f"Status updated to: {status}")
            else:
                await websocket.send_text("Invalid status received")
    except WebSocketDisconnect:
        print("Client disconnected")

@app.get("/case/{case_id}")
async def get_case(case_id: str = Path(..., description="The ID of the case"),
                   status: Status = Query(..., description="The status of the case")):
    try:
        with open(mocked_responses[status], 'r') as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Data not found.")
    
@app.post("/case")
async def submit_case(data: dict = Body(...)):
    # mock data {"record": "<uuid>", "guideline":"uuid"}
    # TODO: add validation later
    return {"message": "Case submitted successfully", "data": data}

@app.get("/")
async def root():
    return {"message": "API works"}