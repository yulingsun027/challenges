console.log("this is working wulala!")
sumOfNegative = (numbers) => {
  // TODO: You are getting a `numbers` array. Return the sum of **negative** numbers only.
  //let numbers =[];
  let sum = 0;
  numbers.forEach(element => {
//loop through the array
    if(element<0){
      return sum += element;
    }
  console.log(sum);
  });
};

let myArray=[-1, 2, 4,-9,0];

sumOfNegative(myArray);