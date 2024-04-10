"use client";

import { useDashboard } from "@/context/dashboard-context";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import PropTypes from 'prop-types'; 

export default function MedicalRecordUpload({onPDFProcessed, prepared}) {
    const { medicalRecord, setMedicalRecord } = useDashboard();

    const handleClick = () => {
        if(prepared) {
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
            onPDFProcessed(true);
        } else {
            alert("Not ready to upload medical record");
        }
    }

    return(
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <button
                className={classNames(
                    "text-white font-medium py-2 px-4 rounded border border-2",
                    medicalRecord === null ? "bg-blue-500 border-blue-500" : "border-transparent text-green-600" 
                )}
                onClick={handleClick}
            >
                {medicalRecord === null && (<span>Simulate Medical Record Upload</span>)}
                {medicalRecord !== null && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Medical Record Uploaded</span>
                    </span>
                )}
            </button>
        </div>
    )
}

MedicalRecordUpload.propTypes = {
    onPDFProcessed: PropTypes.func.isRequired,
    prepared: PropTypes.bool
};