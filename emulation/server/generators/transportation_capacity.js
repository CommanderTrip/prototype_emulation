const {randomNum, dungeonMaster} = require("../utilities")

module.exports = {

    /**
     * Initializes a hospital's transportation capacity
     * @param hospitalData - JSON of the hospital data
     */
    initTransportationCapacity: function (hospitalData) {
        hospitalData['groundAmbulanceTotal'] = randomNum(1, 5);
        hospitalData['groundAmbulanceInUse'] = randomNum(0, hospitalData['groundAmbulanceTotal']);
        hospitalData['airAmbulanceTotal'] = randomNum(0, 3);
        hospitalData['airAmbulanceInUse'] = randomNum(0, hospitalData['airAmbulanceTotal']);
        hospitalData['critCareTransportTotal'] = randomNum(1, 5);
        hospitalData['critCareTransportInUse'] = randomNum(0, hospitalData['critCareTransportTotal']);
        hospitalData['patientTransfer'] = randomNum(1, 3); // YesNoType
    },
    /**
     * Updates only the 'in_use' fields for the hospital transport capacity data
     * @param hospitalData - JSON of the hospital data
     */
    updateTransportationCapacity: function (hospitalData) {
        // Probability chances for each unit
        // Values are percent from 0 to 100
        // [AvailableChance, UnavailableChance]
        const probability = {
            "groundAmbulance": [100, 100],
            "airAmbulance": [10, 10],
            "critCareTransport": [10, 10]
        };

        // Calculate new values for the 'in use' points
        dungeonMaster(probability, hospitalData);
    }
}