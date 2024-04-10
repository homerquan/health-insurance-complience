# health-insurance-complience

This demo application showcases the integration of Large Language Models (LLMs) in verifying the compliance between insurance policies and patient profiles. By automating the comparison process, it aids medical teams in swiftly determining eligibility for treatment. Leveraging advanced AI technology, the app enhances efficiency and accelerates decision-making in healthcare settings.

Start time: 04/10/2024 10:00am EDT

## Explain

* backend
    * GET http://127.0.0.1:8000/case/case_891a_6fbl_87d1_4326?status=submitted
    * POST http://127.0.0.1:8000/case
    ```
    curl -X POST "http://127.0.0.1:8000/case" \ 
     -H "Content-Type: application/json" \
     -d '{"record": "123e4567-e89b-12d3-a456-426614174000", "guideline": "c56a4180-65aa-42ec-a945-5fd"}'
    ```
* frontend

## How to run

### Before the first run
`source ./venv/bin/activate`
### Run it!

you can run all services by `start.sh`

## Unit test

`pytest`

## Reference

* View instructions for completing this take-home assignment [here](https://co-helm.notion.site/Senior-Product-Engineer-Take-Home-6e82ec45cc2a46b59a0d9ee3aeb9449c).
