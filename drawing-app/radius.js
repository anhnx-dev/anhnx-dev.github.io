let setRadius = function (newRadius) {
  if (newRadius < minRad)
    newRadius = minRad;
  else if (newRadius > maxRad)
    newRadius = maxRad;
  radius = newRadius;
  context.lineWidth = radius * 2;
  radSpan.innerHTML = radius;
};

let minRad = 1;
let maxRad = 100;
let defaultRad = 10;
let interval = 5;

const radSpan = document.getElementById('radval');
const decRad = document.getElementById('decrad');
const incRad = document.getElementById('incrad');

decRad.addEventListener('click', function () {
  setRadius(radius - interval);
});

incRad.addEventListener('click', function () {
  setRadius(radius + interval);
});