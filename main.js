// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const articleHearts = document.querySelectorAll(".like-glyph");
function heartCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function (serverMessage) {
      
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = EMPTY_HEART[heart.innerText];
      heart.style.color = FULL_HEART[heart.style.color];

    })
    .catch(function (error) {
      alert("Something went wrong!");
    });
}
setTimeout(() => document.body.style.background = '', 3)
for (const glyph of articleHearts) {
  glyph.addEventListener("click", heartCallback);
}

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 3000);
  });
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
