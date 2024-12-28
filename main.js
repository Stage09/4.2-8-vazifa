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

// function frontBack(str) {
//     if (str.length <= 1) {
//       return str;
//     }
  
//     return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
//   }
  

// 4.https://the-winter.github.io/codingjs/exercise.html?name=front3&title=Warmup-1

// function front3(str) {
//   let front = str.length < 3 ? str : str.substring(0, 3);
  
//   return front + front + front;
// }


// 5.https://the-winter.github.io/codingjs/exercise.html?name=backAround&title=Warmup-1


// function backAround(str) {
//   let lastChar = str[str.length - 1];
  
//   return lastChar + str + lastChar;
// }


// 6.https://the-winter.github.io/codingjs/exercise.html?name=or35&title=Warmup-1


// function or35(num) {
//   return num % 3 === 0 || num % 5 === 0;
// }


// 7.https://the-winter.github.io/codingjs/exercise.html?name=front22&title=Warmup-1

// function front22(str) {
//   let front = str.substring(0, 2);
  
//   return front + str + front;
// }


// 8.https://the-winter.github.io/codingjs/exercise.html?name=startHi&title=Warmup-1

// function startHi(str) {
//   return str.startsWith('hi');
// }


// 9.https://the-winter.github.io/codingjs/exercise.html?name=icyHot&title=Warmup-1

// function icyHot(temp1, temp2) {

//   return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
// }


// 10.https://the-winter.github.io/codingjs/exercise.html?name=in1020&title=Warmup-1

// function in1020(a, b) {
  
//   return (a >= 10 && a <= 20) || (b >= 10 && b <= 20);
// }
