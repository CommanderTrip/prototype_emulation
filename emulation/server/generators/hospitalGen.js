const {initPatientCapacity, updatePatientCapacity} = require('./patient_capacity')
const {initTransportationCapacity, updateTransportationCapacity} = require("./transportation_capacity");
const {intiClinicalSupportServices, updateClinicalSupportServices} = require("./clinical_support_services");
const {initSurgicalServices, updateSurgicalServices} = require("./surgical_services_capacity");
const {locationNamePicker} = require("../utilities");

module.exports = {
    /**
     * Initializes the hospitals with data. Hospitals take the form of json
     * @param numOfHospitals - Total number of hospitals in the system
     */
    initHospitals: function (numOfHospitals) {
        let book = [];  // The 'master' array that contains all the hospitals
        for (let hid = 1; hid <= numOfHospitals; hid++) {
            let hospital = {}; // data storage for this hospital

            // Give hospital identifying information
            // Leave out ID and last Updated for new hospitals
            hospital['id'] = hid;
            hospital['name'] = locationNamePicker(hid-1);
            // hospital['lastUpdated'] = new Date().toISOString().slice(0, 19).replace('T', ' ');

            // Randomly generate the initial hospital data
            initTransportationCapacity(hospital);
            initPatientCapacity(hospital);
            intiClinicalSupportServices(hospital);
            initSurgicalServices(hospital);

            // Add the hospital to the master list
            book.push(hospital);
        }
        return book;
    },
    /**
     * Calls each hospital in the master array to update their values.
     * @param allHospitals - The array master list of all hospitals.
     */
    updateHospitals: function (allHospitals) {
        for (let hospital of allHospitals) {
            updateTransportationCapacity(hospital);
            updatePatientCapacity(hospital);
            updateClinicalSupportServices(hospital);
            updateSurgicalServices(hospital);
        }
    }

}