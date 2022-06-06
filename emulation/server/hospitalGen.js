const {randomNum} = require("./utilities")

module.exports = {
    /**
     * Initializes the hospitals with data. Hospitals take the form of json
     * @param numOfHospitals - Total number of hospitals in the system
     */
    initHospitals: function (numOfHospitals) {
        let book = [];  // The 'master' array that contains all the hospitals
        for (let hid = 1; hid <= numOfHospitals; hid++) {
            // Randomly generate the init hospital data
            let {beds_total, beds_in_use} = module.exports.bedsGeneration();

            // Apply the random data to the hospital
            let hospital = {};
            hospital['id'] = hid;
            hospital['beds_total'] = beds_total;
            hospital['beds_in_use'] = beds_in_use;

            // Add the hospital to the master list
            book.push(hospital);
        }
        return book;
    },
    /**
     * Generates random data of beds for a hospital
     */
    bedsGeneration: function () {
        let bedsData = {};
        bedsData['beds_total'] = randomNum(20, 50);
        bedsData['beds_in_use'] = randomNum(0, bedsData['beds_total']);
        return bedsData;
    },
    /**
     * Determines if the beds in the hospital need to be updated
     */
    bedsUpdate: function (hospitalData) {
        for(let hospital of hospitalData) {
            const bedAvailableChance = 10;  // This chance is out of 100, thus 10 = 0.1% chance
            const bedUnavailableChance = 30;
            let roulette = randomNum(1, 100);  // Generate a random number between 1 and 100

            // Handle if a bed has become available
            if (roulette >= 1 && roulette <= bedAvailableChance) {
                if (hospital['beds_in_use'] !== 0) {
                    console.log(`Bed has become available in hospital ${hospital['id']}!`);
                    hospital['beds_in_use'] = hospital['beds_in_use'] - 1;
                } else {
                    console.log(`Hospital ${hospital['id']} is empty!`);
                }
            }
            roulette = randomNum(1, 100);
            // Handle if a bed has become Unavailable
            if (roulette >= 1 && roulette <= bedUnavailableChance) {
                // Handle if the hospital is already full
                if (hospital['beds_in_use'] !== hospital['beds_total']) {
                    console.log(`Bed has become unavailable in hospital ${hospital['id']}!`);
                    hospital['beds_in_use'] = hospital['beds_in_use'] + 1;
                } else {
                    console.log(`Hospital ${hospital['id']} is full!`);
                }
            }
        }
    }
}