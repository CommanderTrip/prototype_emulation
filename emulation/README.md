# Getting Started

The main application can be launched by navigating to the `emulation` directory of the project and running `npm start`
 to get the dev, web server running. There won't be any connections to the HTTP server for it is not started yet.

Make sure to also run `npm install` in both the `emulation` folder and the `server` folder to install any necessary packages.

## Getting the HTTP and Websockets Started

In another terminal, navigate to the server folder and run `node index.js` to get the HTTP and Websocket Server up and
running. The web client may have to be refreshed in order to establish connection, but otherwise they will connect 
automatically.

## Making changes to the Server VS Client

### Server

The server does not reflect changes made right away. In order to inspect changes, simply stop the server process `ctrl + C`
and restart with `node index.js`.

### Client

All changes to the client will be reflected as they occur but may need a refresh in the browser.