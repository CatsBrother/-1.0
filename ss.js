/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-04 16:01:21
 * @version $Id$
 */
var int;
var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');

function start () {
    clearInterval(int); //想用来防止多次按键重复执行。
    changeColor();
    int = setInterval("changeColor()", 1000); 
}


function changeColor(){

	var square=document.getElementsByClassName('square');

	for (var i =0; i<square.length; i++) {
		square[i].style.backgroundColor="orange";
	}

	var a=Math.ceil(Math.random()*8);
	var b=Math.ceil(Math.random()*8);
	var c=Math.ceil(Math.random()*8);


	var r1=Math.round(Math.random()*255);
	var g1=Math.round(Math.random()*255);
	var b1=Math.round(Math.random()*255);
	var r2=Math.round(Math.random()*255);
	var g2=Math.round(Math.random()*255);
	var b2=Math.round(Math.random()*255);
	var r3=Math.round(Math.random()*255);
	var g3=Math.round(Math.random()*255);
	var b3=Math.round(Math.random()*255);

	r1=r1.toString(16);
	g1=g1.toString(16);
	b1=b1.toString(16);
	r2=r2.toString(16);
	g2=g2.toString(16);
	b2=b2.toString(16);
	r3=r3.toString(16);
	g3=g3.toString(16);
	b3=b3.toString(16);

	var color1='#'+r1+g1+b1;
	var color2='#'+r2+g2+b2;
	var color3='#'+r3+g3+b3;

if (a!=b&&a!=c&&b!=c) {
	var arr=new Array(one,two,three,four,five,six,seven,eight,nine);
	arr[a].style.backgroundColor=color1;
	arr[b].style.backgroundColor=color2;
	arr[c].style.backgroundColor=color3;
}
else{
	changeColor();
}
}

function stop(){
	clearInterval(int);
	var arr=new Array(one,two,three,four,five,six,seven,eight,nine);
	for (var i =0; i<arr.length; i++) {
		arr[i].style.backgroundColor="orange";
	}
}