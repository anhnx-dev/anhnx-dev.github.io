const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let radius = 10;
let dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;


let putPoint = function (e) {
  if (dragging) {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
};

let engage = function (e) {
  dragging = true;
  putPoint(e);
};

let disengage = function () {
  dragging = false;
  context.beginPath();
};

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);