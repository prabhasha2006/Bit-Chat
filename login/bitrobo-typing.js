setTimeout(typeWriter, 1000)
setTimeout(active_field, 4000)

var letter = 0;
var speed = 60;
let BIT_MESSAGE = ""
let BIT_ELEMENT = 1
let BIT_STATE = true
function bitrobo_message(message, chatelement) {
  if(BIT_STATE){BIT_MESSAGE = message; BIT_ELEMENT = chatelement; BIT_STATE = false}
  if (letter < BIT_MESSAGE.length) {
      if(BIT_MESSAGE.charAt(letter).match(/;/gi)){
        document.getElementsByClassName('bitrobo-message')[BIT_ELEMENT].innerHTML += "<br>"
      }else{
        document.getElementsByClassName('bitrobo-message')[BIT_ELEMENT].innerHTML += BIT_MESSAGE.charAt(letter)
      }
      letter++
      setTimeout(bitrobo_message, speed)
  }else{letter = 0; BIT_STATE = true}
}

document.getElementsByClassName("name-input-field-full")[0].style.display = "none"
document.getElementsByClassName("box-body-footer-next-btn")[0].style.display = "none"
function active_field() {
  document.getElementsByClassName("name-input-field-full")[0].style.display = "block"
  document.getElementsByClassName("box-body-footer-next-btn")[0].style.display = "flex"
  window.scrollBy(0, 1000)
}

//console.log(String.fromCharCode(55358, 56598))⚡🎲🤖