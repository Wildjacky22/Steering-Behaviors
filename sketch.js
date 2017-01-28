function setup() {
  createCanvas( windowWidth , windowHeight );

  noStroke();
  
  background( 0 , 0 , 0 )
}
function draw() {

  var r = random( 0 , 35 );
  var g = random( 0 , 150 );
  var b = random( 0 , 255 );
  var a = random( 0 , 100 );

  fill( r , g , b , 2 ); 
  ellipse( mouseX , mouseY , 20 , 20 );
  
  fill( r , g , b , a );
  ellipse( mouseX , mouseY , 30 , 30 );
  
  fill( r , g , b , a );
  ellipse( mouseX , mouseY , 40 , 40);
   
  fill( r , g , b , a );
  ellipse( mouseX , mouseY , 50 , 50);
   
}
