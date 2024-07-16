
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  method: launchOutput,
};

function launchOutput(number){
    if (number % 2 === 0 && !(number % 3 === 0) && !(number % 5 === 0)) {
        return 'Launch!';
    } else if (number % 3 === 0 && !(number % 2 === 0) && !(number % 5 === 0)) {
        return 'Code!';
    } else if (number % 5 === 0 && !(number % 2 === 0) && !(number % 3 === 0)) {
        return 'Rocks!';
    }

    return "PLACEHOLDER"
}

module.exports = launchcode;

