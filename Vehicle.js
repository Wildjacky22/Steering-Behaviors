//creating a vehicle for the steering behaviors.
function vehicle(){

//creating the steering behaviors.
this.pos = createVector();
this.target = createVector()
this.vel = createVector();
this.acc = createVector();
this.r = 8;

}

vehicle.prototype.update = function {

this.pos.add(this.vel);
this.vel.add(this.acc);

}
//taking the function from sketch.js into the vehicle.
vehicle.prototype.show = function(){
stroke( r , g , b );
strakeWeight(10);
point( this.pos.x , this.pos.y );
  
}
