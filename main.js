// 1. https://the-winter.github.io/codingjs/exercise.html?name=missingChar&title=Warmup-1

// function missingChar(str, n) {

//     return str.slice(0, n) + str.slice(n + 1);
//   }
//   console.log(missingChar('kitten', 1)); 
//   console.log(missingChar('kitten', 0)); 
//   console.log(missingChar('kitten', 4));
    
// 2. https://the-winter.github.io/codingjs/exercise.html?name=notString&title=Warmup-1

// function notString(str) {
    
//     if (str.startsWith("not")) {
//       return str; 
//     } else {
//       return "not " + str; 
//     }
// }

// console.log(notString('candy')); 
// console.log(notString('x'));
// console.log(notString('not bad'));


// 3.https://the-winter.github.io/codingjs/exercise.html?name=frontBack&title=Warmup-1

function frontBack(str) {
    if (str.length <= 1) {
      return str;
    }
  
    return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
  }
  