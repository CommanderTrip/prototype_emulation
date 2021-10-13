import PatientCard from "./PatientCard";
import {Link} from "react-router-dom";

const Home = ({patientData}) => {

    // Simply take the patient data and create an unordered list PatientCard
    return (
        Object.keys(patientData).map((patient) => {return (
            <ul style={{
                display: "grid",
                padding: "0",
                margin: "0",
                listStyle: "none",
                gap: "20px"
            }}>
                {/* The link gives the cards page navigation */}
                <Link to={`/patientData/${patient}`} style={{textDecoration: "none"}}>
                    <PatientCard key={patient} patientName={patient} patientData={patientData[patient]}/>
                </Link>
            </ul>
        )}

        )
    )
}

export default Home;