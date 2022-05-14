const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function stand(){
    ctx.beginPath()
    //from    
    ctx.moveTo(50, 400) 
    //to
    ctx.lineTo(50, 50)
    ctx.moveTo(50, 50) 
    //to
    ctx.lineTo(200, 50)
    ctx.moveTo(200,50)
    ctx.lineTo(200, 400)

    ctx.stroke();
    ctx.closePath()
}

function head(){
    ctx.beginPath()
    ctx.arc(200,235,35,0,2*Math.PI)
    ctx.fillStyle = "#00e7ed"
    ctx.fill()
    ctx.closePath()
}

function leftArm(){
    ctx.beginPath()
    ctx.moveTo(200,300)
    ctx.lineTo(150, 350)
    ctx.stroke();
    ctx.closePath()
}

function rightArm(){
    ctx.beginPath()
    ctx.moveTo(200,300);
    ctx.lineTo(250,350)
    ctx.stroke();
    ctx.closePath()
}

function leftLeg(){
    ctx.beginPath()
    ctx.moveTo(200,400)
    ctx.lineTo(150,450)
    ctx.stroke();
    ctx.closePath()
}

function rightLeg(){
    ctx.beginPath()
    ctx.moveTo(200,400);
    ctx.lineTo(250,450)
    ctx.stroke();
    ctx.closePath()
}



stand()
head()
leftArm()
rightArm()
leftLeg()
rightLeg()