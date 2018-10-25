let colors = [
  'black',
  'grey',
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet'
];

// const swatches = document.getElementsByClassName('swatch');

// for (let i = 0; i < swatches.length; i++) {
//   let swatch = swatches[i];
//   swatch.addEventListener('click', setSwatch);
// }

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  const swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = color;
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  const active = document.getElementsByClassName('active')[0];
  if (active) {
    active.className = 'swatch';
  }
}

function setSwatch(e) {
  let swatch = e.target;
  setColor(swatch.style.backgroundColor);
  swatch.className += ' active';
}

setSwatch({
  target : document.getElementsByClassName('swatch') [0]
});