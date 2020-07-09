// TODO: React to a click on the button!

//select the button

const btn = document.querySelector('#clickme');


//add function of what to do to the button

// function callBack () {
// //disable the button
//     btn.classList.add("disabled");
// // change the text from "click me" to "Bingo!"
//     btn.innerHTML = "Bingo!"
// }


//add event listen of how this function to happen
btn.addEventListener("click", ()=>{
    btn.classList.add("disabled");
    btn.innerHTML = "Bingo!"
})



