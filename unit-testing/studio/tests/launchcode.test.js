//need to come back and finish the last couple tests, techinical difficulties :)

const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("checks to see if the value of organization is 'nonprofit'", function(){
   expect(launchcode.organization).toBe("nonprofit")
  });

  test("checks to see if the value of executiveDirector is 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe("Jeff")
   });

   test("checks to see if the value of percentageCoolEmployees is 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100)
   });

   test("checks to see if the value of programsOffered is correct", function(){
    let programsArray = launchcode.programsOffered

    expect(programsArray[0]).toBe("Web Development");
    expect(programsArray[1]).toBe("Data Analysis");
    expect(programsArray[2]).toBe("Liftoff");
    expect(programsArray.length).toBe(3);
   });
  
   test("checks to see if lanchOutput() returns 'Launch!' when passed a number ONLY divisible by 2", function() {
    let variableTester = 
    let num = variableTester % 2
    expect(launchCode.method(2)).toBe('Launch!');
   });

   test("checks to see if lanchOutput() returns 'Launch!' when passed a number ONLY divisible by 3", function() {
    expect(launchCode.method(3)).toBe('Code!');
   });

   test("checks to see if lanchOutput() returns 'Launch!' when passed a number ONLY divisible by 5", function() {
    expect(launchCode.method(5)).toBe('Rocks!');
   });

});