//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. 
//Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let average = 0;
        for (let i = 0; i < this.scores.length; i++) {
            average += this.scores[i];
        }
        average = average/this.scores.length;
        return Math.round(average * 10)/10;
    }
    status(){
        let status = "";
        let averageScore = this.average();
        if (averageScore >= 90){
            status = "Accepted";
        } else if (averageScore >= 80){
            status = "Reserve";
        } else if (averageScore >= 70){
            status = "Probationary";
        } else if (averageScore < 70){
            status = "Rejected";
        }
    return status;
}}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

let testCounter = 0
while (gladGator.average() < 80){
    gladGator.addScore(100);
    testCounter++
}
console.log(`It took ${testCounter} tests to reach Reserve.`);
while (gladGator.average() < 90){
    gladGator.addScore(100);
    testCounter++
}
console.log(`It took ${testCounter} tests to reach Accepted.`);


bubbaBear.addScore(83);
console.log(bubbaBear);
console.log(merryMaltese.average());
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio 
//activity.
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach 
//Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
