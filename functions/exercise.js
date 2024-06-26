function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += (makeLine(size) + '\n');
    }
    return square;
    }
    console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
    }
    console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
     for (let i = 0; i < height; i++) {
         stairs += (makeLine(i+1) + '\n');
        }
        return stairs.slice(0, -1);
      }
      console.log(makeDownwardStairs(5));

// Cannot figure out how to make this work, will come back to it after class and rereading the functions chapter.
// function makeSpaceLine(numSpaces, numChars) {
//       let spaceLine = '';
//       for (let i = 0; i < numSpaces; i++) {
//       } 
//       for (let j = 0; j < numChars; j++){
//         spaceLine += (makeLine(i + j + i));
//       }
      
//       return spaceLine;
//   }  
//   console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));

// can't test code to figure out diamond without having the line spacing working - I think it will be something to do with the reverse method
// function makeDiamond(height) {
//     let diamond = ''; 
//     let triangle = makeIsoscelesTriangle(height);
//     for (let i = 0; i < height; i++) {
//         diamond += (triangle[i]);
//     }
//     return diamond;
// }
// console.log(makeDiamond(5));