var font;

function preload(){
  console.log("hey")
  
  font = loadFont('AvenirNextLTPro-Demi.otf');
  
}



function setup(){
  
  //Setting up the canvas.
  createCanvas( windowWidth , windowHeight );
 // background(51);
  
  //Setting up the colors so tey chamge depending on the time.
  var hr = hour();
  var min = minute();
  var sec = second();

  // Multiply the unit of time so that in one day/minute/hour it will add up to a cmpete 255 color.
  var r = 15+hr*10.0;
  var g = 3+min*4.2;
  var b = 3+sec*4.2;

  // Once a number reaches 255 it will go back to zero.
  if ( r >= 255 ){
   r = 0;
 }
  if ( g >= 255 ){
   g = 0;
 }
  if ( b >= 255 ){
   b = 0;
 }
 
  //Setting up the word.
  textFont(font);
  textSize(250)
  fill( r , g , b );
  noStroke();
  textAlign( CENTER , CENTER )
  text('Marth' , width*0.5 , height*0.5 );
  
  var points = font.textToPoints('Marth' , width*0.5 , height*0.5 );
  
  for(var i = 0; i < points.lenght; i++){
    
    var p1 = points[i];
    stroke(0,255,0);
    strokeWeight(10);
    point(p1.x , p1.y )
    
  } 
}

function draw(){

    background(51);
  
  
  
  
  
}
