import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HeartRate from "./HeartRate";

// Displayed when clicking on a patient card
const PatientDetail = ({data}) => {
    const {patientID} = useParams(); // get the patient ID
    const [patient, setPatient] = useState(null);

    // When ever the dependencies change
    useEffect(() => {
        setPatient(data[`${patientID}`]); // fetch the patient data
    }, [data, patientID]);

    return (
        <div>
            {/* If the patient data exists, show the heart rate. Otherwise, dont show anything. */}
            {patient ? <HeartRate bpm={patient.heartRate}/> : null}
        </div>
    )
}

export default PatientDetail;
