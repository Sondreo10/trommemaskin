// referanser til html-elementer
const audio = document.querySelectorAll("audio");

// globale variabler
const knapper = ["a","s","d","f","g","h","j","39"];

// hendelsesfunksjoner
document.onkeydown = function(event){
  console.log(event);
  for(let i = 0;i < 9; i++){
    console.log(i);
    if(event.key ===knapper[i]){
      audio[i].play();
      audio[i].currenTime = 0;
    }
  }
}
