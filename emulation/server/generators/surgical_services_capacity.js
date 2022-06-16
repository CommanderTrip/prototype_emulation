const {randomNum, dungeonMaster} = require("../utilities");

module.exports = {
    /**
     * Initializes the Surgical Services of the hospital
     * @param hospitalData - JSON of the hospital data
     */
    initSurgicalServices: function (hospitalData) {
        hospitalData['surgicalServiceType1'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType1Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType1InUse'] = randomNum(0, hospitalData['surgicalServiceType1Total']);
        hospitalData['surgicalServiceType2'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType2Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType2InUse'] = randomNum(0, hospitalData['surgicalServiceType2Total']);
        hospitalData['surgicalServiceType3'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType3Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType3InUse'] = randomNum(0, hospitalData['surgicalServiceType3Total']);
        hospitalData['surgicalServiceType4'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType4Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType4InUse'] = randomNum(0, hospitalData['surgicalServiceType4Total']);
        hospitalData['surgicalServiceType5'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType5Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType5InUse'] = randomNum(0, hospitalData['surgicalServiceType5Total']);
        hospitalData['surgicalServiceType6'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType6Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType6InUse'] = randomNum(0, hospitalData['surgicalServiceType6Total']);
        hospitalData['surgicalServiceType7'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType7Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType7InUse'] = randomNum(0, hospitalData['surgicalServiceType7Total']);
        hospitalData['surgicalServiceType8'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType8Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType8InUse'] = randomNum(0, hospitalData['surgicalServiceType8Total']);
        hospitalData['surgicalServiceType9'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType9Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType9InUse'] = randomNum(0, hospitalData['surgicalServiceType9Total']);
        hospitalData['surgicalServiceType10'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType10Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType10InUse'] = randomNum(0, hospitalData['surgicalServiceType10Total']);
        hospitalData['surgicalServiceType11'] = randomNum(1, 10); // SurgicalTypeList
        hospitalData['surgicalServiceType11Total'] = randomNum(0, 5);
        hospitalData['surgicalServiceType11InUse'] = randomNum(0, hospitalData['surgicalServiceType11Total']);
    },
    updateSurgicalServices: function (hospitalData) {
        // Probability chances for each unit
        // Values are percent from 0 to 100
        // [AvailableChance, UnavailableChance]
        const probability = {
            "surgicalServiceType1InUse": [30, 30],
            "surgicalServiceType2Total": [30, 30],
            "surgicalServiceType3Total": [30, 30],
            "surgicalServiceType4Total": [30, 30],
            "surgicalServiceType5Total": [30, 30],
            "surgicalServiceType6Total": [30, 30],
            "surgicalServiceType7Total": [30, 30],
            "surgicalServiceType8Total": [30, 30],
            "surgicalServiceType9Total": [30, 30],
            "surgicalServiceType10Total": [30, 30],
            "surgicalServiceType11Total": [30, 30],
        };

        // Calculate new values for the 'in use' points
        dungeonMaster(probability, hospitalData);
    }
}