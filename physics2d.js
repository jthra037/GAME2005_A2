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

function circleWallCollision(circle, wall, vel) {
	var n = wall.dirVec.perp();
	var a = Vec(circle.center, wall.point);
	var c = dotprod(a, n);
	var v = dotprod(vel, n);
	
	if (isNaN(c))
		return -1;
	
	if (Math.abs(c) <= circle.radius)
		return 0;
	
	if (v >= 0)
		return -1;
	
	var r;
	if (c < 0)
		r = n.mul(-circle.radius);
	else
		return -1
	
	var p = circle.center.add(r);
	
	t = intersectionTime(p, vel, wall.point, wall.dirVec);
	//t = particleToLine(p, vel, wall);
	
	return t;
}

function intersectionTime(p1, v1, p2, v2)
{
    var tc1 = v1.x;
    var tc2 = v1.y;
    var sc1 = v2.x;
    var sc2 = v2.y;
    var con1 = p2.x - p1.x;
    var con2 = p2.y - p1.y;
    var det = (tc2*sc1 - tc1*sc2);
    if (det == 0)
		return -1;
	else
    {
        var con = (sc1*con2 - sc2*con1);
        var t = con/det;
        return t;
    }
}