const fs = require("fs");

module.exports = {
    /**
     * Creates a list of patients with random data
     * @param numOfPatients - the number of patients to generate
     * @return {{}} - and object that has keys for each patient and data associated with each key
     */
    createPatientList: function (numOfPatients) {
        let patientList = {}

        for (let i = 0; i < numOfPatients; i++) {
            patientList[`Patient${i}`] = {
                "heartRate": randomNum(80, 100),
                "upperBP": randomNum(110, 120),
                "lowerBP": randomNum(78, 80),
                "o2": randomNum(95, 98),
                "bodyTemp": randomNum(95, 102)
            }
        }

        return patientList;
    },
    /**
     * Creates a json file that contains all the data of the patients
     * @param patientList - the json of all the patients
     * @param pathToFile - where to store the data
     */
    logPatients: function (patientList, pathToFile) {
        fs.open(pathToFile, "w+", (err, fd) => {
            if (err) {
                return console.log(err);
            }
            // console.log("File opened successfully.");

            const data = JSON.stringify(patientList);

            fs.writeFile(pathToFile, data, (err) => {
                if (err) {
                    return console.log(err);
                }
                //console.log("Writing to file.");
            })

            fs.close(fd, (err) => {
                if (err) {
                    return console.log(err);
                }
                //console.log("File closed successfully.");
            })
        })
    }
}

/**
 * Generates a random number between min and max
 * @param min - minimum value
 * @param max - maximum value
 * @return {number} - a number between min and max
 */
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
//
// /**
//  * Creates a list of patients with random data
//  * @param numOfPatients - the number of patients to generate
//  * @return {{}} - and object that has keys for each patient and data associated with each key
//  */
// const createPatientList = (numOfPatients) => {
//     let patientList = {}
//
//     for (let i = 0; i < numOfPatients; i++) {
//         patientList[`Patient${i}`] = {
//             "heartRate": randomNum(80, 100),
//             "upperBP": randomNum(110, 120),
//             "lowerBP": randomNum(78, 80),
//             "o2": randomNum(95, 98)
//         }
//     }
//
//     return patientList;
// }
//
// /**
//  * Creates a json file that contains all the data of the patients
//  * @param patientList - the json of all the patients
//  * @param pathToFile - where to store the data
//  */
// const logPatients = (patientList, pathToFile) => {
//     fs.open(pathToFile, "w+", (err, fd) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("File opened successfully.");
//
//         const data = JSON.stringify(patientList);
//
//         fs.writeFile(pathToFile, data, (err) => {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("Writing to file.");
//         })
//
//         fs.close(fd, (err) => {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("File closed successfully.");
//         })
//     })
// }
