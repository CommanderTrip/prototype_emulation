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
    },
    /**
     * Generates a random number between min and max
     * @param min - minimum value
     * @param max - maximum value
     * @return {number} - a number between min and max
     */
    randomNum:function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    /**
     *
     */
    sendToAPI: function (data) {
        return fetch("WHATEVER OUR API URL IS", {
            method: 'POST', // May need to be PUT and not POST
            headers: {
                'Content-Type': 'application/json'
            },
            body: data  // Only need to stringify if there are nested values
        });
    }

}
