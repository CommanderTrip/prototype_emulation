const {randomNum} = require('../utilities');

module.exports = {
    /**
     * Initializes the hospital's Clinical Support Services
     * @param hospitalData - JSON of the hospital data
     */
    intiClinicalSupportServices: function (hospitalData) {
        hospitalData['labType'] = randomNum(1, 4) // LabTypeList
        hospitalData['labStatus'] = randomNum(1, 3) // SimpleStatusTypeList
        hospitalData['xrayStatus'] = randomNum(1, 3) // SimpleStatusTypeList
        hospitalData['ctStatus'] = randomNum(1, 3) // SimpleStatusTypeList
        hospitalData['mriStatus'] = randomNum(1, 3) // SimpleStatusTypeList
        hospitalData['mentalHealthProvStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['mentalHealthProvTotal'] = randomNum(0, 5)
        hospitalData['combatStressTeamsStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['combatStressTeamsTotal'] = randomNum(0, 5)
        hospitalData['physicalTherapistsStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['physicalTherapistsTotal'] = randomNum(0, 5)
        hospitalData['occupantTherapistsStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['occupantTherapistsTotal'] = randomNum(0, 5)
        hospitalData['nutritionTherapistsStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['nutritionTherapistsTotal'] = randomNum(0, 5)
        hospitalData['bloodDetachmentStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['bloodDetachmentTotal'] = randomNum(0, 5)
        hospitalData['bloodUnitsOnHandStatus'] = randomNum(0, 3) // StatusTypeList
        hospitalData['bloodUnitsOnHandTotal'] = randomNum(0, 5)
        hospitalData['veterinaryTeamStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['veterinaryTeamTotal'] = randomNum(0, 5)
        hospitalData['veterinaryBedsStatus'] = randomNum(1, 4) // StatusTypeList
        hospitalData['veterinaryBedsTotal'] = randomNum(0, 5)
    },
    updateClinicalSupportServices: function () {
        // Nothing needs updating here?
    }
}