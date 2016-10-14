//////////////////////////////////////////////////////////////////////
// 
// Copyright (C) 2016
// Author: Ilir Dema
//
//////////////////////////////////////////////////////////////////////
//
// 2D Geometry modules
//
function Point(x,y) {
	this.x = x;
	this.y = y;
	this.dist = function(otherPt)  {
		var xd = this.x - otherPt.x;
		var yd = this.y - otherPt.y;
		return Math.sqrt(xd*xd+yd*yd);
	}
}

function Vec(tail,head) {
	// tail is the tail end point of the vector
	// head is the tip of the arrow poijnt
	return new vec2d(head.x-tail.x,head.y-tail.y);
}

function Circle(center,radius) {
	// center is a point
	// radius is a positive number
	this.center = center;
	this.radius = radius;
}

function Line(point, dirVec) {
	// point a fixed Point on the line
	// dirVec a unit vector indicating the direction of the line
	this.point = point;
	this.dirVec = dirVec.unit();	
}

function Rectangle(point1, point2) {
	// point1, point2 are ppoints on opposite ends of diagonal
	this.point1 = point1;
	this.point2 = point2;
}