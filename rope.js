class rope{
	constructor(x,y,w,h){
	//create rope constraint here
	var options={
		isStatic:false			
		}
		
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.body=Bodies.rectangle(x, y, w, h , options);
	 World.add(world, this.body);
	}
	display(){
		push()
		rectMode(CENTER)
		strokeWeight(2);
		stroke(255);
		pop()
	}
}