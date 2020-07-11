const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  // define the probilities
  let num = Math.random();
  if (num < 0.2) {
    return true
  } else {
    return false
  };
  //return true or false
};


//generate a random message object with a sender and subject

const newMessage = async () => {
	let data =  await fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/johncalvinroberts/03-Wagon-Race/master/stories.json")
  let jsonData = await data.json() ;
  return jsonData;  // This will return a **Promise** object
};
// const newMessage = (senderInput, subjectInput) => {
//   fetch("https://raw.githubusercontent.com/johncalvinroberts/03-Wagon-Race/master/stories.json")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
// }).catch(error => {
//   console.log(error)
// })
//   let newObject = new Object();
//   let senderList = ['company','family','disney land','spotify','le wagon'];
//   let subjectList = ['greetings','lunch','dinner plans','party','learning','travel'];
//   senderInput = senderList[Math.floor(Math.random() * senderList.length)];
//   subjectInput = subjectList[Math.floor(Math.random() * subjectList.length)];
//   newObject.sender = senderInput;
//   newObject.subject = subjectInput;
//   return newObject;
// };



//create div node lists
const createNode = (text) => {
  let emptyDiv = document.createElement('div');
  let node = document.createTextNode(text);
  emptyDiv.appendChild(node);
  //console.log(nodeDiv);
  return emptyDiv;
};



//select inbox div
let allMessages = document.querySelector('#inbox');

//create new div
const createNewDiv = (msg) =>{
  
  let senderinfo = msg.name;
  let subjectinfo = msg.text;

    
  //append sender and subject to new unread list
  let senderDiv = createNode(senderinfo);
  senderDiv.classList.add('col-3');
  let subjectDiv = createNode(subjectinfo);
  subjectDiv.classList.add('col-6');
  console.log(senderDiv, subjectDiv);
  let messageDiv = document.createElement('div');
  messageDiv.appendChild(senderDiv);
  messageDiv.appendChild(subjectDiv);
  
  return messageDiv;

};



const appendUnReadMessageToDom = (el) => {
  
// TODO: append the given message to the DOM (as a new row of `#inbox`)

//take the input as arguments
//create unread div
let newUnread = createNewDiv(el);
newUnread.classList.add('row', 'message', 'unread');
console.log(newUnread);
allMessages.insertAdjacentElement('afterbegin',newUnread);
};

//create read div

// const appendReadMessageToDom = () => {
  
//   // TODO: append the given message to the DOM (as a new row of `#inbox`)
  
//   //take the input as arguments
//   //create unread div
//   let read = createNewDiv();
  
//   read.classList.add('row', 'message', 'read');
//   console.log(read);
//   allMessages.appendChild(read);
//   };

//counter

// const counter = document.querySelector('#count');
// let unreadDiv = allMessages.getElementsByClassName('unread')
//   let divNo = unreadDiv.length + 1;
//   console.log(divNo);
//   counter.innerHTML = `(${divNo})`;

  

// const refresh = () => {
//   // TODO: Implement the global refresh logic. If there is a new message,
//   //       append it to the DOM. Update the unread counter in title as well.
//   // if (hasNewMessage()){
//   //   appendUnReadMessageToDom();
//   // }
//   // appendReadMessageToDom();
//   const counter = document.querySelector('#count');
//   let unreadDiv = allMessages.getElementsByClassName('unread')
//   let divNo = unreadDiv.length;
//   console.log(divNo);
//   counter.innerHTML = `(${divNo})`;
// };

const refresh = async () => {
  
  if (hasNewMessage()){
  const msgs = await newMessage(); //msgs should contain 4 data now
  console.log(msgs);
  // use msgs here...
  msgs.forEach((msg) => {
    appendUnReadMessageToDom(msg);
  });
  
      // }
      // appendReadMessageToDom();
      const counter = document.querySelector('#count');
      let unreadDiv = allMessages.getElementsByClassName('unread')
      let divNo = unreadDiv.length;
      console.log(divNo);
      counter.innerHTML = `(${divNo})`;

}
}









// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called
  
});

