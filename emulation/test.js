var fs = require("fs");

function simBp(){
    let upperNum = 0;
    let lowerNum = 0;

    const randomBp = (min, max) => {
        let num = Math.random() * (max - min) + min;
    return Math.floor(num);
    };
    upperNum = randomBp(110,120);
    lowerNum = randomBp(70,80);

return [upperNum, lowerNum];
}

function simHeartRate(){
    let heartRate = 0;

    const randomHr = (min, max) => {
        let num = Math.random() * (max - min) + min;
    return Math.floor(num);
    };
return randomHr(80,100);
}

function simO2(){
    let oxygenLevel = 0;

    const oxygenPer = (min, max) => {
        let num = Math.random() * (max - min) + min;
    return Math.floor(num);
    };   
return oxygenPer(95,98);
}

function createPatient(){
	const hr = simHeartRate();
	const bp = simBp();
	const o2 = simO2();
			
	bpUpper = bp[0];
	bpLower = bp[1];
	return {
		"heartRate": hr,
		"upperBp": bpUpper,
		"lowerBp": bpLower,
		"OxygenLevel": o2,
	}
}

const createPatientList = () => {
	let x = 0;
	const numOfPatients = 500;
	let patientList = []
	while (x < numOfPatients) {
		patientList.push({ id: `Patient ${x}`, info: createPatient()});
		x += 1;
	}
	return patientList;
}

function run() {
	
	fs.open('C:\\Users\\J\\Desktop\\emulation\\src\\test.json', 'w+', function(err, fd) {
		if (err) {
			return console.error(err);
		}
		console.log("File opened successfully!");

		testData = createPatientList();

		const data = JSON.stringify(testData);

		fs.writeFile('C:\\Users\\J\\Desktop\\emulation\\src\\test.json', data, function(err, fd) {
			if (err) {
				console.log(err)
			}
			console.log('Writing data to file');
		});
		
		fs.close(fd, function(err) {
			if (err) {
				console.log(err);
			} 
			console.log("File closed successfully.");
		});
	});
}

setInterval(run, 1000);

