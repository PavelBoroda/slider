const thumb = document.getElementById('thumb');
const bg = document.getElementById('bg');
let dragStatus = false;
let count = 0;
let x;
const step = 200;
const bgWidth = 300;
const thumbWidth = 7;
const counter = document.getElementById('counter');
bg.style.width = bgWidth + thumbWidth + 'px';
thumb.style.width = thumbWidth + 'px';
const maxValue = 2600;
const minValue = 0;

thumb.onmousedown = function(e) {
  dragStatus = true;
  x = e.pageX - thumb.offsetLeft;
};

// преобразование пикселей в Value
const steps = (maxValue-minValue)/bgWidth;
const valueSteps = maxValue/bgWidth;

document.onmousemove = function(e) {
  if (!dragStatus) return false;

  let left = (e.pageX - x);

  if (left < 0) {
    left = 0;
  }
  if (left> bg.offsetWidth - thumb.offsetWidth) {
    left = (bg.offsetWidth - thumb.offsetWidth);
  }

  count = left;
  counter.value = Math.round((count*steps)/step)*step;
  thumb.style.left = left + 'px';
};

counter.addEventListener('keyup', function() {
  if (counter.value <= maxValue) {
    thumb.style.left = (counter.value / valueSteps) + 'px';
  } else {
    counter.value = 2600;
  }
});

document.onmouseup = function() {
  dragStatus = false;
};

