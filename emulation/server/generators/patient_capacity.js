const {randomNum, dungeonMaster} = require("../utilities");
module.exports = {
    /**
     * Initializes a hospital's patient capacity
     * @param hospitalData - JSON of the hospital data
     */
    initPatientCapacity: function (hospitalData) {
        hospitalData['bedsTotal'] = randomNum(20, 50);
        hospitalData['bedsInUse'] = randomNum(0, hospitalData['bedsTotal']);
        hospitalData['bedsIcuTotal'] = randomNum(10, 20);
        hospitalData['bedsIcuInUse'] = randomNum(0, hospitalData['bedsIcuTotal']);
        hospitalData['medlogResupply'] = randomNum(1, 3); // YesNoList
    },
    /**
     * Determines if the beds in the hospital need to be updated
     * @param hospitalData - JSON of the hospital data
     */
    updatePatientCapacity: function (hospitalData) {
        // Probability chances for each unit
        // Values are percent from 0 to 100
        // [AvailableChance, UnavailableChance]
        const probability = {
            "bedsInUse": [10, 30],
            "bedsIcuInUse": [10, 10],
        };

        // Calculate new values for the 'in use' points
        dungeonMaster(probability, hospitalData);
    }
}