import {useEffect, useState} from "react";

import './App.css';
import PatientCard from "./component/PatientCard";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import HeartRate from "./component/HeartRate";

const client = new W3CWebSocket("ws://localhost:8000");

const App = () => {
    const [patientData, setPatientData] = useState({});
    const [patientCards, setPatientCards] = useState(null);

    useEffect(() => {
        // When connection to server is established
        client.onopen = () => {
            console.log("Websocket Client Connected!");
        }

        // When the client receives a message from the server
        client.onmessage = (message) => {
            console.log("Received message!");

            // Parse the stringified JSON
            const data = JSON.parse(message.data);

            // set the patient data
            setPatientData(data);
        }
    }, []);

    useEffect(() => {
        const generatePatientCard = () => {
            return Object.keys(patientData).map((patient) => {
                return (
                    <PatientCard key={patient} patientName={patient} patientData={patientData[patient]}/>
                )
            })
        }

        setPatientCards(generatePatientCard());
    }, [patientData])


  return (
      <div className="App">
        <div className="App-header">
            {patientData ? patientCards : null}
            <HeartRate/>
        </div>
      </div>
  );
}

export default App;
