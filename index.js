
var number = document.querySelectorAll(".drum").length;
for(var i= 0;i<number;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",deep);
}

function deep() {
   
  var playSong = this.innerHTML;

  playsong1(playSong);
  animation(playSong);
  
 

  }




document.addEventListener("keypress", function(event){
  playsong1(event.key);
  animation(event.key);
})

function playsong1(key){


   switch(key){
      case "w" :
        var tom1 = new Audio('tom-1.mp3');
         tom1.play();
     
         break;
     
         case "a" :
           var tom2 = new Audio('tom-2.mp3');
           tom2.play();
           break;
     
           case "s" :
              var tom3 = new Audio('tom-3.mp3');
              tom3.play();
              break;
      
              case "d" :
                 var tom4 = new Audio('tom-4.mp3');
                 tom4.play();
                 break;
     
                 case "j" :
                    var snare = new Audio('snare.mp3');
                    snare.play();
                    break;
     
                    case "k" :
                       var kick = new Audio('kick-bass.mp3');
                       kick.play();
                       break;
          
                       case "l" :
                          var crash = new Audio('crash.mp3');
                          crash.play();
                          break;
     
                          default :


}
}

function animation(animationKey){
  var active = document.querySelector("."+animationKey);
  active.classList.add("pressed");
  setTimeout(function(){
   active.classList.remove("pressed");},50)



}
