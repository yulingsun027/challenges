console.log("This is working! Wulala!");

evenOrOdd = (number) => {
  if(number%2){
    return `${number} is odd!`
  } else {
    return `${number} is even!`
  }
  // TODO: this should return "even" if the number is even, "odd" otherwise
}

let checkNumber = evenOrOdd(9);
console.log(checkNumber);