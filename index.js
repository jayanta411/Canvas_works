var menu,canvas;
function setCanvas(menuWidth,menuHeigth,paperWidth,paperHeight){
    //Setting menulist and canvas
    menu = document.getElementById("menu");
    canvas = document.getElementById("paper");

    //setting menu
    let mw = 'width:'+Math.floor((window.innerWidth*(menuWidth/100) -20)).toString()+'px;';
    //menu.setAttribute('style',mw);
    let mh = 'height:'+Math.floor((window.innerHeight*(menuHeigth/100) - 20)).toString()+'px;';
    //menu.setAttribute('style',mh);
    menu.setAttribute('style',mw+mh+'margin:5px');

    //setting paper
    canvas.width = Math.floor(window.innerWidth*(paperWidth/100) - 20);
    canvas.height = Math.floor(window.innerHeight*(paperHeight/100) - 20);
    canvas.setAttribute('style','margin:5px');

    
}
function draw(){
var canvas=document.getElementById("can");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c;
if(canvas.getContext){
    ctx = canvas.getContext('2d');
    
    // c.fillStyle = 'rgb(0,0,200)';
    // c.fillRect(50,50,100,100);
    // c.clearRect(75,75,50,50);
    // c.fillStyle = 'rgb(0,255,0)';
    // c.strokeRect(80,80,40,40);
    // c.beginPath();
    // c.moveTo(200,200);
    // c.lineTo(250,250);
    // c.lineTo(250,200);
    // c.closePath();
    // c.stroke();
    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.stroke();

} else{
    //canvas unsupported code here
}

}



