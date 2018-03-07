var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0,0,0,0.8';
    c.fillRect(0,0, canvas.width, canvas.height);
    for (var i = 1; i<50; i++){
        var x = Math.round(Math.random() * window.innerWidth);
        var y = Math.round(Math.random() * window.innerHeight);
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        c.beginPath();
        c.arc(x, y, 20, 0, 0.2*Math.PI);
        c.strokeStyle = 'rgba('+r+','+g+', '+b+', 1)';
        c.fillStyle = 'rgba('+r+','+g+','+b+', 0.5)';
        c.fill();
        c.stroke();
}


}
animate();