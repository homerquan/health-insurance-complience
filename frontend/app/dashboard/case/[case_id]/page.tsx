"use client";

import React, { useState, useEffect } from 'react';
import { getCase } from '@/connector/api';
import CaseStatus from '@/constants/caseStatus'
import CaseDataDisplay from '@/components/case-data-display';

// A mock case ID for demonstration
const mockCaseId = 'mock-case-id';

export default function CaseResult() {
	// State to store the case data
	const [caseStatus, setCaseStatus] = useState(CaseStatus.SUBMITTED);
	const [caseData, setCaseData] = useState({});
	// State to store any potential error message
	const [errorMessage, setErrorMessage] = useState('');

	// Function to fetch the case data
	const fetchCaseData = async (caseId) => {
		try {
			const data = await getCase(caseId, caseStatus);
			setCaseData(data);
		} catch (error) {
			setErrorMessage(error.message || 'Failed to fetch case data');
		}
	};

	useEffect(() => {
		// Calling the fetch function
		fetchCaseData(mockCaseId);
		// Simulation prgressive rendering in each steps
		const updateStatus = () => {
			setCaseStatus((currentStatus) => {
				switch (currentStatus) {
					case CaseStatus.SUBMITTED:
						return CaseStatus.PROCESSING;
					case CaseStatus.PROCESSING:
						return CaseStatus.COMPLETE;
					case CaseStatus.COMPLETE:
						// Here you might want to stop updating or reset to SUBMITTED
						// For this example, let's just return COMPLETE to stop the cycle.
						return CaseStatus.COMPLETE;
					default:
						return currentStatus;
				}
			});
		};

		const intervalId = setInterval(updateStatus, 10000);
		

		// Cleanup the interval on component unmount
		return () => clearInterval(intervalId);
	}, []); // Empty dependency array means this effect runs once on component mount

	useEffect(() => {
		// Calling the fetch function after init loading
		fetchCaseData(mockCaseId);
	}, [caseStatus]);

	// Render the case data or an error message
	return (
		<div>
			<h1>Case Result</h1>
			{caseStatus != CaseStatus.COMPLETE && <p><b>Progressive loading more ...</b></p>}
			<CaseDataDisplay caseData={caseData} />
			{errorMessage && <p>Error: {errorMessage}</p>}
		</div>
	);
}