//receive string length from user
document.querySelector('button').addEventListener('click', getMorse)

async function getMorse(){

//grab the value = (number) from the form
const number = document.querySelector('input').value
//pull number random elements from the object 
const dictionary = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}

const keys = Object.keys(dictionary)
//const randoms = keys[Math.floor(Math.random() * keys.length)]
//console.log(randoms)
const playArray = []

for ( let i = 1; i <= number; i++){
  const randoms = keys[Math.floor(Math.random() * keys.length)]
  playArray.push(randoms)
}
//console.log(playArray)

const dashAndDots = playArray.map( sign => dictionary[sign] )
//console.log(dashAndDots)
//code to play them in the DOM
const dashSound = new Audio('dash.mp3')
//dashSound.play()
const dotSound = new Audio('dot.mp3')
//dotSound.play()
//add spaces between elements in the array (when building array or during the playing process)
for (let i = 0; i < dashAndDots.length; i++){
  //function delayAudio(){
   // return new Promise (res=>{
   //   dashAndDots[i].onended = function spaces() {
   //     setTimeout(() => res(), 400)}
   // })
    //}
  //console.log(dashAndDots[i])
  for (let j = 0; j < dashAndDots[i].length; j++){
    //if (dashAndDots[i][j] === '.'){ dotSound.play()
    //} else { dashSound.play()}
    console.log(dashAndDots[i][j])
    if (dashAndDots[i][j] === '.'){ 

      function playAudio(dotSound){
       return new Promise(res=>{
          dotSound.play()
          dotSound.onended = function spaces() {
            setTimeout(() => res(), 200)}
        })
      }
      console.log(playAudio)
      await playAudio(dotSound)
      console.log(playAudio)
      //dotSound.play()
      } else { 
        function playAudio(dashSound){
        return new Promise(res=>{
          dashSound.play()
          dashSound.onended = function spaces() {
            setTimeout(() => res(), 200)}
          })
          }
      await playAudio(dashSound)
      //dashSound.play()}
  }
}
}
//play using audio files and print to DOM simultaneously

//print in the DOM, but not be visible 

//once dad has listened to the event, he can reveal the code

//hide the printed morse code

//option to replay the selection - store it locally? or at least store the pattern locally




//   const result = '';
//   const characters = 'abcdefghijklmnopqrstuvwxyz0123456789.,?!()&'
//   const length = document.querySelector('input').value
//   const charactersLength = characters.length;
// //choose random characters from list
//   for(let i=0; i<length; i++){
//     result += characters.charAt(Math.floor(Math.random()*charactersLength));
//   }
//   //return result
// //console.log(makeid(5))

//   const url = `http://api.funtranslations.com/translate/morse/audio.json?text=${result}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.contents.translated.audio)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
}