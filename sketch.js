var font;

function preload(){
  console.log("hey")
  
  font = loadFont('AvenirNextLTPro-Demi.otf');
  
}



function setup(){
  
  
  createCanvas( windowWidth , windowHeight );
  background(51);
  textFont(font);
  textSize(300)
  fill(255);
  noStroke();
  textAlign( center , center )
  text('Marth' , width*0.5 , height*0.5 );
  
}

function draw(){

  
  
  
  
  
  
}
