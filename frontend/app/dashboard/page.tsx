"use client";

import { useState, useEffect } from "react";
import GuidelinesUpload from "@/components/guidelines-upload";
import MedicalRecordUpload from "@/components/medical-record-upload";
import { useRouter } from "next/navigation";
import "../../styles/dashboard.css"; // Assuming you're importing CSS from an external file

const steps = [
  "Step1: parsing the policy",
  "Step2: parsing the medical record",
  "Step3: AI Checking compliance",
  "Step4: finalizing the report",
];

export default function DashboardRoot() {
  const router = useRouter();
  const CASE_ID = "case_891a_6fbl_87d1_4326";
  const [showModal, setShowModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hasGuidePDFProcessed, setHasGuidePDFProcessed] = useState(false);
  const [hasMRPDFProcessed, setHasMRPDFProcessed] = useState(false);

  useEffect(() => {
    // Triggered when `hasMRPDFProcessed` changes.
    if (hasMRPDFProcessed) {
      // Check if the guidelines PDF has been processed.
      if (!hasGuidePDFProcessed) {
        alert("Please upload a guide first.");
      }
    }
  }, [hasMRPDFProcessed, hasGuidePDFProcessed]);

  const handleContinue = () => {
    setShowModal(true);
    let currentStep = 0;
    const intervalId = setInterval(() => {
      if (currentStep < steps.length) {
        setActiveStep(currentStep++);
      } else {
        clearInterval(intervalId);
        // Navigate after the last step
        setShowModal(false); // Hide modal before navigation for a smoother transition
        router.push(`/dashboard/case/${CASE_ID}`);
      }
    }, 5000); // 5 seconds delay for each step
  };

  const renderStep = (step, index) => {
    let icon;
    if (index < activeStep) {
      icon = "✅"; // Step completed
    } else if (index === activeStep) {
      icon = "🔄"; // Current step, spinning
    } else {
      icon = "⏳"; // Upcoming step
    }

    return (
      <div key={index} className={`flex items-center ${index === activeStep ? "text-green-500 spinning" : ""}`}>
        <span>{icon}</span> {step}
      </div>
    );
  };

  const isContinueButtonDisabled = !hasGuidePDFProcessed || !hasMRPDFProcessed;

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      {showModal && (
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            {steps.map((step, index) => renderStep(step, index))}
          </div>
        </div>
      )}
      <div className="w-full flex flex-row gap-2 items-center">
        <MedicalRecordUpload onPDFProcessed={setHasMRPDFProcessed} prepared={hasGuidePDFProcessed}/>
        <GuidelinesUpload onPDFProcessed={setHasGuidePDFProcessed} />
      </div>
      <div className="w-full py-4 flex flex-row justify-center">
        <button
          className={`font-medium py-2 px-4 rounded ${isContinueButtonDisabled ? "bg-gray-500 border-gray-500 text-white" : "bg-green-600 border-transparent text-white"}`}
          onClick={handleContinue}
		  disabled={isContinueButtonDisabled}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
