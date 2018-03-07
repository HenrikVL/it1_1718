console.log("Hei IT1");

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// Rektangler
c.fillStyle = 'blue';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'red';
c.fillRect(100, 200, 200, 100);
c.fillStyle = 'green';
c.fillRect(200, 100, 100, 100);
c.fillStyle = 'white';
c.fillRect(300, 300, 200, 100);
c.fillStyle = 'yellow';
c.fillRect(400, 100, 100, 100);


// Linjer
c.beginPath();
c.moveTo(100, 100);
c.lineTo(400, 400);
c.strokeStyle = 'black';
c.stroke();

c.beginPath();
c.moveTo(400, 400);
c.lineTo(500, 300);
c.strokeStyle = 'black';
c.stroke();

c.beginPath();
c.moveTo(100, 300);
c.lineTo(50, 350);
c.lineTo(100, 400);
c.lineTo(150,350);
c.lineTo(100, 300);
c.strokeStyle = 'red';
c.stroke();


// Sirkel
c.beginPath();
c.arc(350, 250, 50, 0, 2*Math.PI, false);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 0, 250, 0.3)';
c.fill();
c.stroke();


// Mange sirkler
// Mønster
for (var i = 1; i<3; i++){
    c.beginPath();
    c.arc(200, 200, 50+i*10, 0, 1*Math.PI);
    c.strokeStyle = 'blue';
    c.stroke();
}
//Tilfeldig

for (var i = 1; i<50; i++){
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    c.beginPath();
    c.arc(x, y, 10, 0, 2*Math.PI);
    c.strokeStyle = 'rgba('+r+','+g+', '+b+', 1)';
    c.stroke();
}


// Segway

c.beginPath();
c.moveTo(100, 600);
c.lineTo(600, 600);
c.strokeStyle = 'green';
c.stroke();


c.beginPath();
c.arc(200, 570, 30, 0, 2*Math.PI, false);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 0, 250, 0.3)';
c.fill();
c.stroke();

c.beginPath();
c.moveTo(160, 570);
c.lineTo(170, 530);
c.lineTo(230, 530);
c.lineTo(240, 570);
c.strokeStyle = 'blue';
c.stroke();

c.beginPath();
c.moveTo(215, 450);
c.lineTo(220, 530);
c.strokeStyle = 'blue';
c.stroke();

c.beginPath();
c.arc(215, 450, 3, 0, 2*Math.PI, false);
c.strokeStyle = 'blue';
c.fillStyle = 'rgba(0, 0, 250, 0.3)';
c.fill();
c.stroke();



