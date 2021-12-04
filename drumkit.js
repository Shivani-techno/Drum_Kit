for(var  i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
var buttonInnerHTML=this.innerHTML;
makesound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});
function makesound(key){
  switch(key){
    case "w":
    var audioplay1=new Audio("sounds/tom-1.mp3");
    audioplay1.play();
      break;
      case "a":
      var audioplay2=new Audio("sounds/tom-2.mp3");
      audioplay2.play();
        break;
        case "s":
        var audioplay3=new Audio("sounds/tom-3.mp3");
        audioplay3.play();
          break;
          case "d":
          var audioplay4=new Audio("sounds/tom-4.mp3");
          audioplay4.play();
            break;
            case "k":
            var audioplay5=new Audio("sounds/crash.mp3");
            audioplay5.play();
              break;
              case "l":
              var audioplay6=new Audio("sounds/kick-bass.mp3");
              audioplay6.play();
                break;
                case "j":
                var audioplay7=new Audio("sounds/snare.mp3");
                audioplay7.play();
                  break;
                  default:console.log(buttonInnerHTML);
                  }
                }
    function buttonAnimation(currentkey){
var activeButton=document.querySelector("."+currentkey+"drum");
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
    }
