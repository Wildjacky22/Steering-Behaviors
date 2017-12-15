
//creating a vehicle for the steering behaviors.
function Vehicle(x,y){

//creating the steering behaviors.
this.pos = createVector(random(width),random(height));
this.target = createVector(x,y);
this.vel = p5.Vector.random2D();
this.acc = createVector();
this.r = 8;
this.maxspeed = 10;
this.maxforce = 1;

}

Vehicle.prototype.behaviors = function(){
  
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX , mouseY );
  var flee = this.flee(mouse);
  
  arrive.mult(2);
  flee.mult(10);
   
 
  this.applyForce(arrive);
  this.applyForce(flee);
  
  
};

Vehicle.prototype.applyForce = function(f){
  this.acc.add(f);

};





Vehicle.prototype.update = function() {

this.pos.add(this.vel);
this.vel.add(this.acc);
this.acc.mult(0);

};
//taking the function from sketch.js into the vehicle.
Vehicle.prototype.show = function(){
  
    //Setting up the colors so tey chamge depending on the time.
  var hr = hour();
  var min = minute();
  var sec = second();

  // Multiply the unit of time so that in one day/minute/hour it will add up to a cmpete 255 color.
  var e = 15+hr*10.0;
  var g = 3+min*4.2;
  var b = 3+sec*4.2;

  // Once a number reaches 255 it will go back to zero.
  if ( e >= 255 ){
   e = 0;
 }
  if ( g >= 255 ){
   g = 0;
 }
  if ( b >= 255 ){
   b = 0;
 }
  
stroke( e , g , b );
strokeWeight(10);
point( this.pos.x , this.pos.y );
  
};

Vehicle.prototype.arrive = function(target) {
  
  var desired = p5.Vector.sub(target , this.pos );
  var d = desired.mag();
  var speed = this.maxspeed;
  if(d < 300 ){
    speed = map( d , 0 , 300 , 0 , this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
  
};

Vehicle.prototype.flee = function(target) {
  
  var desired = p5.Vector.sub(target , this.pos );
  var d = desired.mag();
  if(d < 50){
  desired.setMag(this.maxspeed);
  desired.mult(-1);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
  }else{
    return createVector(0,0);
  }
};
