
// NEED TO RESIZE THE PG LAYER WHEN THE SITE IS RESIZED.

const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
const synth = new Tone.PolySynth().connect(pingPong);
synth.set({ detune: -1200 });
// play a chord
const synth2 = new Tone.PolySynth().connect(pingPong);
synth.volume.value  = -14
synth2.volume.value  = -14
synth2.set({ detune: -1200 });

let body, header, swoop, looop, img, img2, img3, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, pg
let sentence, sentences
let counter1 = 0;
let plusser = 0;
let txt1;
let rm
let spinner = 0
let seed = 100
let images = []
let clicked = true;
let reducer = 0;
var foo = new p5.Speech(); // speech synthesi
let counterGlobal = 0
let spinVar = 0.01
let lineVar = 0

function preload(){
  txt1 = loadStrings('Sizhan.txt');
  img = loadImage('2.png');
  img2 = loadImage('3.png');
  img3 = loadImage('5.png');
  img5 = loadImage('6.png');
  img6 = loadImage('7.png');
  img7 = loadImage('8.png');
  img8 = loadImage('9.png');
  img9 = loadImage('10.png');
  img10 = loadImage('11.png');
  img11 = loadImage('12.png');
  img12 = loadImage('13.png');
  img13 = loadImage('14.png');
  img14 = loadImage('15.png');
  img15 = loadImage('16.png');
  img16 = loadImage('17.png');
  images.push(img, img2, img3, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16)
}

function setup(){

pg = createGraphics(windowWidth, windowHeight)
let canvas = createCanvas(windowWidth, windowHeight, WEBGL)
canvas.parent('canvasHolder')
body = document.getElementById('this')
header = document.getElementById('header')
swoop = document.getElementById('this7')
looop = document.getElementById('this8')
pooper =  document.getElementById('this9')
ploof =  document.getElementById('this10')
}

function mousePressed() {
  if(clicked == true && counterGlobal < 200){
  Tone.Transport.start();
  rm = RiTa.markov(2) //function within RiTa.js
  rm.addText(txt1);
  sentences = rm.generate(30); //two(2) is minimum
  sentence = sentences.join('.');
  foo.speak(sentence); // say something
  body.append(sentence)
  header.append(sentence)
  swoop.append(sentence)
  looop.append(sentence)
  pooper.append(sentence)
  ploof.append(sentence)
  }
  clicked = false;
}

Tone.Transport.scheduleRepeat(corrupt, 0.04);

function corrupt(){
  if(clicked == false){
  
  plusser += 1
  if (plusser >= 8){
  translate(-width/2, -height/2)
  synth.triggerAttackRelease([seed * floor(random(1, 2)), seed * floor(random(3, 5)), seed * floor(random(5, 8))], 8);
  synth2.triggerAttackRelease([seed * floor(random(8, 10)), seed * floor(random(11, 13)), seed * floor(random(14, 17))], 4);
  let boopy = images[counter1]
  boopy.resize(random(300 - reducer, 600 - reducer), random(300 - reducer, 600 - reducer));
  image(boopy, random(-width/2, width), random(-height/2, height))
  plusser = 0;

  counter1 ++
  if (counter1 > images.length -1){
    counter1 = 0
  }
}
counterGlobal +=1
}
}

function draw() {
if (clicked == false){
  push()
 
  spinner = frameCount * spinVar
  rotateY(spinner);
  rotateX(0.5)
  normalMaterial()
  box(100, 550, 100);
  push()
  translate(0, -90)
  normalMaterial()
  box(400, 100, 100);
  pop();
  pop();
  
}
if(counterGlobal > 200 && spinner >= 6){
  spinner = 6
  spinVar = 0
  lineVar = 8
  Tone.Transport.stop()
  pg.fill(255, 0, 0)
  pg.textSize(200)
  pg.text('HOLY.REPUBLICAN', -20, 200)
  pg.fill(255)
  pg.textSize(24)
  pg.text(sentence, 20, 240, width - 20, height)
  const osc = new Tone.Oscillator(440, "sine").toDestination().start();
}
image(pg, -width/2, - height/2)
}
