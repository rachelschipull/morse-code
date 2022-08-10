//receive string length from user
document.querySelector('.button-25').addEventListener('click', getMorse)

async function getMorse(){
//grab the value = (number) from the form
const number = document.querySelector('input').value
//pull number random elements from the object 
const dictionary = {
  "0": "-----*",
  "1": ".----*",
  "2": "..---*",
  "3": "...--*",
  "4": "....-*",
  "5": ".....*",
  "6": "-....*",
  "7": "--...*",
  "8": "---..*",
  "9": "----.*",
  "A": ".-*",
  "B": "-...*",
  "C": "-.-.*",
  "D": "-..*",
  "E": ".*",
  "F": "..-.*",
  "G": "--.*",
  "H": "....*",
  "I": "..*",
  "J": ".---*",
  "K": "-.-*",
  "L": ".-..*",
  "M": "--*",
  "N": "-.*",
  "O": "---*",
  "P": ".--.*",
  "Q": "--.-*",
  "R": ".-.*",
  "S": "...*",
  "T": "-*",
  "U": "..-*",
  "V": "...-*",
  "W": ".--*",
  "X": "-..-*",
  "Y": "-.--*",
  "Z": "--..*",
  ".": ".-.-.-*",
  ",": "--..--*",
  "?": "..--..*",
  "!": "-.-.--*",
  "-": "-....-*",
  "/": "-..-.*",
  "@": ".--.-.*",
  "(": "-.--.*",
  ")": "-.--.-*"
}
//set constant to target individual keys from the dicitionary
const keys = Object.keys(dictionary)
//console.log(randoms)

//set array to hold keys
const playArray = []
//loop to select random keys from the dictionary and place into array
for ( let i = 1; i <= number; i++){
  const randoms = keys[Math.floor(Math.random() * keys.length)]
  playArray.push(randoms)
}
//console.log(playArray)

//maps the code into the array vs the key names
const dashAndDots = playArray.map( sign => dictionary[sign] )
//console.log(dashAndDots)

//constants to add sounds to the Audio API
const dashSound = new Audio('dash.mp3')
dashSound.autoplay = true;
//dashSound.play()
const dotSound = new Audio('dot.mp3')
dotSound.autoplay = true;
//dotSound.play()
const blankSound = new Audio('blank.mp3')
blankSound.autoplay = true;
//adds spaces between elements in the array (when building array or during the playing process)

//nested loop to play over the dashes and dots and add space between them to make them audible
for (let i = 0; i < dashAndDots.length; i++){
  //console.log(dashAndDots[i])
  for (let j = 0; j < dashAndDots[i].length; j++){
    //if (dashAndDots[i][j] === '.'){ dotSound.play()
    //} else { dashSound.play()}
    console.log(dashAndDots[i][j])
    if (dashAndDots[i][j] === '.'){ 

      //plays dot sounds
      function playAudio(dotSound){
       return new Promise(res=>{
          dotSound.play()
          //on the end of the dot sound adds 200 ms of time before the await
          dotSound.onended = function spaces() {
            setTimeout(() => res(), 200)}
        })
      }
      //once the function has completed, moves on to next j index
      await playAudio(dotSound)
      //dotSound.play()

      } else if (dashAndDots[i][j] === '-'){ 
        function playAudio(dashSound){
        return new Promise(res=>{
          dashSound.play()
          dashSound.onended = function spaces() {
            setTimeout(() => res(), 200)}
          })
          }
      await playAudio(dashSound)
      //dashSound.play()}

      } else {
        function playAudio(blankSound){
          return new Promise( res => {
            blankSound.play()
            blankSound.onended = function space() {
              setTimeout(() => res(), 200)}
          })
          }
      await playAudio(blankSound)
      }
    }
  }
//makes the playArray visible in the DOM
document.querySelector('#solutionId').addEventListener('click', revealMorse)

function revealMorse(){
  console.log(playArray)
  //prints the playArray to the h3 in the DOM
  document.querySelector('h3').innerText = `${playArray.join(' ')}`
}
}
