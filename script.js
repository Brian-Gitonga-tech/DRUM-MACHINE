let keypads = 
   {
    keypad1: 'Q',
    keypad2: 'W',
    keypad3: 'E',
    keypad4: 'A',
    keypad5: 'S',
    keypad6: 'D',
    keypad7: 'Z',
    keypad8: 'X',
    keypad9: 'C'
   }

 const play = (str) => {
  const audio = document.getElementById(str);
  const display = document.getElementById('info');
  display.innerHTML = 'BEAT ' + str;
  audio.play();

}

const beat = document.querySelector("#container");
const elements = beat.querySelectorAll("button.drum-pad");
elements.forEach(button => {button.addEventListener("keydown", (e) => {
  for(let key in keypads) {
    if(e.key.toUpperCase() === keypads[key]) {
        play(e.key.toUpperCase())
    } 
  }
})
})
