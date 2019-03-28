// Import stylesheets
import './style.css';

(function generateView(){

  let timelineUl = document.querySelector('#timeline>ul');
  const START_H = 9;
  const END_H = 18;

  for (let h = START_H; h <= END_H; h++) {
    let li = document.createElement('li');
    li.setAttribute('class', 'timeline-row');
    let span = document.createElement('span');
    span.innerText = ('0' + h + ':00').slice(-5);
    li.appendChild(span);
    timelineUl.appendChild(li);
  }

  console.log(timelineUl);
})()