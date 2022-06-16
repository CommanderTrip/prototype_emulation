const {isOriginAllowed, putToAPI} = require("./utilities");
const {initHospitals, updateHospitals} = require("./generators/hospitalGen");

const WebSocketServer = require("websocket").server;    // Websocket import
const http = require("http");   // HTTP server import
const serverPort = 8000;    // Saving the port to a constant

// Create HTTP server
const server = http.createServer((request, response) => {
    console.log(`Received request for ${request.url}`);
    response.writeHead(404);
    response.end();
});
server.listen(serverPort, () => {
    console.log(`Server listening on port ${serverPort}`);
})

// Create Websocket Server
const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnection: true // THIS WILL NEED TO BE FALSE LATER
})


/*
    Patient Data Generation
 */
// // Server created, start the patient generation
// let patientData = {}    // Store the patient data here
// const updateTime = 1000;    // How quickly to update in ms
// const numOfPatients = 500;   // Number of patients to create
//
// // Set one interval to generate patient data as if receiving from machine
// setInterval(() => {
//     process.stdout.write("Updating patient list...");   // Log to console without new line
//     patientData = createPatientList(numOfPatients);
//     console.log("Done.");
// }, updateTime)
//
// // Set interval to save the data to local json
// setInterval(() => {
//     process.stdout.write("Logging patient list...");
//     logPatients(patientData, "roster.json");
//     console.log("Done.");
// }, 5000)

/*
    Hospital data Generation
 */
let numOfHospitals = 14; // 14 at most
let hospitals = initHospitals(numOfHospitals);

setInterval(() => {
    updateHospitals(hospitals);
    for(let h of hospitals) {
        putToAPI(`https://imccs-j-api-appservice.azurewebsites.us/api/hospital/UpdateHospital/${h['id']}`, h);
    }
    console.log("Data Sent!")
}, 10000);






// Will run when a request is received from a client
wsServer.on("request", (request) => {

    // Check to reject the connection
    if(!isOriginAllowed(request.origin)) {
        request.reject();
        console.log(`Rejected connection from ${request.origin}`);
        return;
    }

    // Accept the connection
    let connection = request.accept(null, request.origin);
    console.log('Client Connected!');

    // Set an interval to constantly send the client patient data
    const sendData = setInterval(() => {
        const data = JSON.stringify(patientData);
        connection.sendUTF(data);
        console.log((new Date()) + " - Data Sent to client!")
    }, updateTime)

    // Handle when a message is received from the client
    connection.on("message", (message) => {
        if (message.type === "utf8") {
            console.log(`Received message: ${message.utf8Data}`);
        }
    })

    // Handle when a client disconnects
    connection.on("close", () =>{
        console.log("Client has disconnected.");
        connection = null;
        clearInterval(sendData);
    })
});