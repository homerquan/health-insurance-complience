import config from '@/config';
import CaseStatus from '@/constants/caseStatus';

export async function postCase(): Promise<void> {
    const apiUrl = config.apiUrl + '/case'; // Adjust this URL to your actual API endpoint
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers required by your API
        },
        body: JSON.stringify({}), //TODO: add body later
      });
  
      if (!response.ok) {
        // If the response is not ok, throw an error to be caught in the catch block
        const errorData = await response.json();
        throw new Error(`API Error: ${errorData.message}`);
      }
  
      // Optionally handle the response data
      const data = await response.json();
      console.log('Success:', data);
      // Handle successful response
      return data;
    } catch (error) {
      console.error('API call failed:', error);
      // Handle error scenario, possibly rethrow or manage error states
    }
  }

// Function to get a case by ID
export async function getCase(caseId: string, status: string = CaseStatus.SUBMITTED): Promise<void> {
    const apiUrl = `${config.apiUrl}/case/${caseId}?status=${status}`; // Adjust this URL to your actual API endpoint
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authorization headers or others as needed
        },
      });
  
      if (!response.ok) {
        // If the response is not ok, throw an error to be caught in the catch block
        const errorData = await response.json();
        throw new Error(`API Error: ${errorData.message}`);
      }
  
      // Handling the response data
      const data = await response.json();
      return data;
      // You can return this data or handle it as needed
    } catch (error) {
      console.error('Failed to retrieve case:', error);
      // Handle error scenario, possibly rethrow or manage error states
    }
  }