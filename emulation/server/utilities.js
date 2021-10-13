module.exports = {

    /**
     * This function is called when a client requests to connect to the server.
     * This will check if the origin is one we want to connect and return a boolean.
     * For now, we always accept.
     * @param origin - the origin of the client that wants to connect
     * @return boolean - T/F if we accept connection from origin
     */
    isOriginAllowed: function (origin) {
        console.log(`The origin is: ${origin}`);
        return true;
    }
}
