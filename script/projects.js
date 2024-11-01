// 

    window.onload = () => {
        let canvas = document.getElementById("canvasBoard");
        console.log(canvas);
        let ctx = canvas.getContext("2d");
        console.log(ctx);
        ctx.fillStyle = "rgb(0, 128, 255)";
        ctx.strokeStyle = "rgb(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.arc(400,300,10,0,2 * Math.PI);
        ctx.stroke();
        ctx.fill();

    }

    let drawBall = () => {

    }

    let refreshAnimation = () => {
        
    }
