'use strict';

const progressEl = document.getElementById('progress');
const circleEl = document.querySelectorAll('.circle');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let lengthCircleEl = circleEl.length;

let countActive = 0;

// nextBtn Event Listener
nextBtn.addEventListener('click', () => {
  countActive++;
  if(countActive >= lengthCircleEl - 1) {
    countActive = lengthCircleEl - 1
  }
  updateDOM();
})

// prevBtn Event Listener
prevBtn.addEventListener('click', () => {
  countActive--;

  if(countActive < 1) {
    countActive = 0
  }

  updateDOM();
})

// Update DOM and check disabled button
function updateDOM() {
  let progressPercent = ((countActive)/(lengthCircleEl-1)) * 100;
  progressEl.style.width=`${progressPercent}%`;
  circleEl.forEach((circle, id) => { 
    if(id <= countActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  if(countActive < 1) {
    prevBtn.disabled = true;
  } else if (countActive >= 3) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
