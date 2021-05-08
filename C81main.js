canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="red";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

colour="blue";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();

colour="green";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

colour="yellow";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(225,250,40,0,2*Math.PI);
ctx.stroke();

colour="black";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(275,250,40,0,2*Math.PI);
ctx.stroke();


colour="black";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.rect(150,150,200,150);
ctx.stroke();





function circle(mousex,mouseY){
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(mousex,mouseY,40,0,2*Math.PI);
ctx.stroke();
}