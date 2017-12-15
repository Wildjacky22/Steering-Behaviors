
function vehicle(){

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

vehicle.prototype.show = function(){
stroke( r , g , b );
strakeWeight(10);
point( p1.x , p1.y );

}
