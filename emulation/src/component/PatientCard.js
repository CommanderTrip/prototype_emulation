
// Patient card just takes a specified patient's data and presents it in a 'card'
const PatientCard = ({patientName, patientData}) => {
    return (
        <div className={"patient"}>
            <h3>{patientName}</h3>
            <p>{patientData.heartRate} bpm</p>
            <p>{patientData.upperBP} / {patientData.lowerBP} mmHg</p>
            <p>{patientData.o2}%</p>
            <p>{patientData.bodyTemp} &#176;F</p>
        </div>
    )
}

export default PatientCard;
