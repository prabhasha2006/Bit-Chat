setTimeout(typeWriter, 1000)
var i = 0;
var bitrobo_message1 = 'Hey👋,;I am Bit-Robo.🎲;How can I help you ?;Now you are going to create a BitChat accont.;Thanks for using BitChat.';
var speed = 50;
function typeWriter(statement) {
  statement = "create-account-name"
  if(statement === "create-account-name"){
    if (i < bitrobo_message1.length) {
      if(bitrobo_message1.charAt(i).match(/;/gi)){
        document.getElementsByClassName('bitrobo-message')[0].innerHTML += "<br>"
      }else{
        document.getElementsByClassName('bitrobo-message')[0].innerHTML += bitrobo_message1.charAt(i)
      }
      i++
      setTimeout(typeWriter, speed)
    }
  }else{i = 0}
}