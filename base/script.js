const thumb = document.getElementById('thumb');
const bg = document.getElementById('bg');
let dragStatus = false;
let count = 0;
let x;
let step = 1;
let width = 262;
bg.style.width = width + 'px';
let maxValue = 500;

thumb.onmousedown = function(e) {
  dragStatus = true;
  x = e.pageX - thumb.offsetLeft;
};

// формула шага
let steps = width / maxValue * step;
console.log(steps);

document.onmousemove = function(e) {
  if (!dragStatus) return false;
  thumb.style.left = e.pageX - x + 'px';
  if (thumb.offsetLeft < 0) thumb.style.left = 0 + 'px';
  if (thumb.offsetLeft > bg.offsetWidth - thumb.offsetWidth)thumb.style.left = bg.offsetWidth - thumb.offsetWidth + 'px';
  count = Math.round(thumb.offsetLeft/step)*step;
  document.getElementsByTagName('p')[0].innerHTML = count;
};

document.onmouseup = function() {
  dragStatus = false;
};
