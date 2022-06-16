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
     * Sends JSON to the specified API
     * @param api - String of the API to POST to
     * @param data - Single JSON to send
     * @returns {Promise<Response>}
     */
    putToAPI: function (api, data) {
        return fetch(api, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    },
    /**
     * Picks a random name for the hospital
     * @param index - the index to get a name
     * @returns {string}
     */
    locationNamePicker: function (index) {
        const towns = [
            'Exeter',
            'Sudbury',
            'Nerton',
            'Stratford',
            'Satbury',
            'Penzance',
            'Falkirk',
            'Llyn',
            'Waeldestone',
            'Merton',
            'Bannockburn',
            'Hempholme',
            'Carran',
            'Orkney',
            'Archmouth',
            'Beckton',
            'Windermere',
            'Aylesbury',
            'Aelinmiley',
            'Duncaster'
        ];
        return towns[index];
    },
    /**
     * Run the die roller for availability chances and set new values
     * @param probability - The probability table for a set of data points
     * @param data - The master table of the data
     */
    dungeonMaster: function (probability, data) {
        const dataPoints = Object.keys(probability);  // Get the list of data points

        // Roll your chances for each data point and adjust value
        dataPoints.forEach((dp) => {
            // Generate die roll
            const aRoll = module.exports.randomNum(1, 100);
            const uRoll = module.exports.randomNum(1, 100);

            // Check probability
            let makeAvailable = false;
            let makeUnavailable = false;
            const chances = probability[`${dp}`];  // Get the probability table


                // This should allow an impossible chance if chance[X] = 0
            if (aRoll > 0 && aRoll < chances[0]) makeAvailable = true;
            if (uRoll > 0 && uRoll < chances[1]) makeUnavailable = true;

            // Check bounds and set the value in the data
            if(makeAvailable && data[`${dp}InUse`] !== 0) {
                data[`${dp}InUse`] = data[`${dp}InUse`] - 1;
                console.log(`${dp} now available!`);
            }
            if(makeUnavailable && data[`${dp}InUse`] !== data[`${dp}Total`]) {
                data[`${dp}InUse`] = data[`${dp}InUse`] + 1;
                console.log(`${dp} now unavailable!`);
            }
        })
    }
}
