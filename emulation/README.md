This folder contains all the files related to the Patient data emulator, server, and dashboard.

# Brief Structure

* emulation
  * public - Contains the main `index.html` file and any additional assets for the project such as images
  * server - Contains all the files related to the server side of the application
  * src - This is where the meat of the project lives.
    * component - Any React components we make will live in here.
    * App.js - The main start point the dev starts when controlling interactions
    * index.js - The main start where React loads our project into the `index.html`.
  * package.json - List of dependencies.

# Getting Started

If it is your first time here, make sure to run `npm install` to download all the dependencies for the client side of the project.
Make sure to all navigate into the `server` folder and running `npm install` there too to get the dependencies of the server.

The main application can be launched by navigating to the `emulation` directory of the project and running `npm start`
 to get the dev, web server running. There won't be any connections to the HTTP server for it is not started yet.

## Getting the HTTP Server and Websockets Started

In another terminal, navigate to the server folder and run `node index.js` to get the HTTP and Websocket Server up and
running. The web client may have to be refreshed in order to establish connection, but otherwise they will connect 
automatically.

## Making changes to the Server VS Client

### Server

The server does not reflect changes made right away. In order to inspect changes, simply stop the server process `ctrl + C`
and restart with `node index.js`.

### Client

All changes to the client will be reflected as they occur but may need a refresh in the browser.