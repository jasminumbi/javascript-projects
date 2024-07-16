const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("checkFive", function(){
      let output = checkFive(2);
      hasUncaughtExceptionCaptureCallback(output).toEqual("2 is less than 5.");
   });

});