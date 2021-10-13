import {useEffect, useState} from "react";
import {w3cwebsocket as W3CWebSocket} from "websocket"; // https://www.npmjs.com/package/websocket
import {BrowserRouter, Switch, Route} from 'react-router-dom'; // https://reactrouter.com/web/guides/quick-start
import PatientDetail from "./component/PatientDetail";
import Home from "./component/Home";
import './App.css';

// Attempt connection to a server at specified URL
const client = new W3CWebSocket("ws://localhost:8000");

const App = () => {
    const [patientData, setPatientData] = useState({}); // Save the patient data

    // When the component mounts
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


    // Control how the routing on the site works
    return (
        <div className="App">
            <div className="App-header">
                <BrowserRouter>
                    <Switch>
                        <Route path={"/patientData/:patientID"}>
                            <PatientDetail data={patientData}/>
                        </Route>
                        <Route path={"/"}>
                            <Home patientData={patientData}/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
