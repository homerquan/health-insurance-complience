import React from 'react';

const CaseDataDisplay = ({ caseData }) => {
    if (!caseData) return (<div>Can not find the case</div>);

    return (
        <div>
            <h1>{caseData.procedure_name}</h1>
            <div>Status: {caseData.status}</div>
            <div>Case ID: {caseData.case_id}</div>
            <div>
                CPT Codes:
                <ul>
                    {caseData?.cpt_codes?.map((code, index) => (
                        <li key={index}>{code}</li>
                    ))}
                </ul>
            </div>
            <div>
                <strong>Summary:</strong>
                <p>{caseData.summary}</p>
            </div>
            {caseData?.steps?.map((step) => (
                <div key={step.key}>
                    <h2>{step.question}</h2>
                    {step.options.map(option => (
                        <div key={option.key}>
                            <input
                                type="checkbox"
                                checked={option.selected}
                                readOnly
                            />
                            {option.text}
                        </div>
                    ))}
                    <p>{step.reasoning}</p>
                </div>
            ))}
        </div>
    );
};

export default CaseDataDisplay;
