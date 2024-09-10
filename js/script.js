//Function
let x = '/* Function Count */'
console.log(x);

function flowers(){
   let rose = 10
   let tulip = 5
   let z = rose+tulip
   let result = z
   console.log(result);
}
flowers()

//array with loop
let xx = '/* Array with loop */'
console.log(xx);

let colorNam = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Aash']
for (let i = 0; i < colorNam.length; i++) {
    console.log(colorNam [i]);
    
}


//Speech Synthesis (Sound listening Mozilla Firefox So please run file Mozilla Firefox)
let y = '/* Speech Synthesis */'
console.log(y);

let utterance = new SpeechSynthesisUtterance("Hello, This is Nipa");
speechSynthesis.speak(utterance);


//Speech Synthesis with array/loop/funtion  (Sound listening Mozilla Firefox So please run file Mozilla Firefox)
let yy = '/* Speech Synthesis with array/loop/funtion */'
console.log(yy);

let colorNamm = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Aash']
function colorName(colors){
    let utterance = new SpeechSynthesisUtterance(`${colors} color`);
    speechSynthesis.speak(utterance);
}
for (let i = 0; i < colorNamm.length; i++) {
    colorName(colorNamm [i]);
}




