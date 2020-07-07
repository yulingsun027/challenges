console.log("This is working! Wulala!");

evenOrOdd = (number) => {
  if(number%2){
    return `${number} is even!`
  } else {
    return `${number} is odd!`
  }
  // TODO: this should return "even" if the number is even, "odd" otherwise
}

let checkNumber = evenOrOdd(9);
console.log(checkNumber);