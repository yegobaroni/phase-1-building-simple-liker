// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const newObj = {
  [EMPTY_HEART]: FULL_HEART,
  [FULL_HEART]: []
}
const colorObj = {
  "": "red",
  "red": ""
}
document.addEventListener("DOMContentLoaded", () => {
  let likeHearts = document.getElementsByClassName("like-glyph")
  for (let heart of likeHearts) {
    heart.addEventListener("click", likepost)
  }
}
  ,
  function likePost(e) {
    let heartButton = e.target
    mimicServerCall()
      .then((data) => {
        alert(data)
        heartButton.innerText = newObj[heartButton.innerText]
        heartButton.style.color = colorObj[heartButton.style.color]
      })
      .catch((error) => {
        document.getElementById("modal").removeAttribute("class")
        let message = document.getElementById("modal.message")
        setTimeout(() => {
          document.getElementById("modal").hidden = true
        }, 3000)
      })
  })
  ,



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

