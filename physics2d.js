//////////////////////////////////////////////////////////////////////
// 
// Copyright (C) 2016
// Author: Ilir Dema
//
//////////////////////////////////////////////////////////////////////
//
// Physcis modules
//
function particleToLine(p,v,line) {
	// compute the time of a point with initial position p
	// moving with velocity vector v, hits a line 
    
	var dist = p.dist(line.point);
	
	if(dist <= Number.MIN_VALUE)
		return Number.MIN_VALUE;
	
	var fromLine = Vec(line.point,p);
	var perp = line.dirVec.perp();
	var vComp = dotprod(fromLine,perp);
	if(vComp < -Number.MIN_VALUE)
		perp = new vec2d(-perp.x,-perp.y);
	
	vComp = dotprod(v,perp);
	if(vComp >= Number.MIN_VALUE) 
		return Number.POSITIVE_INFINITY;
	
	var mat = new mat2d(v,line.dirVec);
    var comat = new mat2d(fromLine,line.dirVec);
    var dmat = mat.det();
    if(Math.abs(dmat) <= Number.MIN_VALUE)
        return Number.POSITIVE_INFINITY;
	else
		return comat.det()/dmat;
}

function circleWallCollision(circle, wall) {
	//
	// Circle is given via center point and radius
	// Wall is given as a straight line
	//
	
	
}