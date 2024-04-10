# Health Insurance Compliance

## Overview

This demo application demonstrates the integration of Large Language Models (LLMs) to verify compliance between insurance policies and patient profiles. It automates the comparison process, aiding medical teams in swiftly determining treatment eligibility. Leveraging advanced AI technology, this app enhances efficiency and accelerates decision-making in healthcare settings.

**Demo Duration:**
- Start: April 10, 2024, 10:00 AM EDT
- End: April 10, 2024, 3:00 PM EDT

## Features

- **Backend:** Automates the compliance verification process using RESTful APIs.
- **Frontend:** Utilizes progressive rendering to update the case page every 10 seconds for real-time compliance checking.

## Getting Started

### Prerequisites

- Python 3.x
- pip
- npm

### Running the Backend

1. Activate a Python 3 virtual environment and install dependencies:
   ```shell
   python3 -m venv venv
   source ./venv/bin/activate
   pip install -r requirements.txt
   uvicorn main:app
   ```
   
## Running frontend
  * `npm i .`
  * `npm run dev`
  * Once open both backedn and frontend services, open browswer `http://localhost:3000/`

## Unit test

Testing APIs

1. ```
http://127.0.0.1:8000/case/case_891a_6fbl_87d1_4326?status=submitted
```

2. ```shell
curl -X POST "http://127.0.0.1:8000/case" \
 -H "Content-Type: application/json" \
 -d '{"record": "123e4567-e89b-12d3-a456-426614174000", "guideline": "c56a4180-65aa-42ec-a945-5fd"}'
```

## Reference

* View instructions for completing this take-home assignment [here](https://co-helm.notion.site/Senior-Product-Engineer-Take-Home-6e82ec45cc2a46b59a0d9ee3aeb9449c).
