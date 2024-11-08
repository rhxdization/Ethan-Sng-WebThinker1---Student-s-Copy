let canvas, ctx;
let centerX, centerY;
let ballX, ballY;
let dX, dY;

let drawBall = () => {
    ctx.fillStyle = "rgb(0, 128, 255)";
    ctx.strokeStyle = "rgb(0, 0, 0, 0)";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, 2 * Math.PI); // Use dynamic ballX, ballY
    ctx.stroke();
    ctx.fill();
}

let animating = () => {
    if (document.getElementById("playanimation").checked) {

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    
        if (ballX < 0 || ballX > canvas.width) {
            dX = -dX;
        }
        if (ballY < 0 || ballY > canvas.height) {
            dY = -dY;
        }
    
        ballX = ballX + dX;
        ballY = ballY + dY;

        drawBall(); // Redraw ball at new position
        
    }
    requestAnimationFrame(animating); // Keep the animation going
}

window.onload = () => {
    canvas = document.getElementById("canvasBoard");
    ctx = canvas.getContext("2d");
    
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    ballX = centerX; // Start ball at the center
    ballY = centerY;
    
    dX = 3;  // Set the ball's speed in x-direction
    dY = 3;  // Set the ball's speed in y-direction
    
    animating(); // Start the animation loop
}
