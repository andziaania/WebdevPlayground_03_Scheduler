// Import stylesheets
import './style.css';

(function generateSchedulerRows() {

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
})();

(function displayEvents() {

  let getMinutestamp = function(hourString) {
    const pattern = /[0-2]\d:[0-5]\d/;
    const hourPattern = /^[0-2]\d/;
    const minutePattern = /[0-5]\d$/;
    const MINUTES_IN_H = 60;
    if (!pattern.test(hourString)) {
      console.log(`getMinutestamp error: ${hourString} doesn't match ${pattern} pattern!`);
      return;
    }    

    let h = parseInt(hourString.match(hourPattern));
    let min = parseInt(hourString.match(minutePattern));
    return h * MINUTES_IN_H + min;
  }

  const dayStart = document.getElementsByClassName('timeline-row')[0];
  const dayStartTime = getMinutestamp(dayStart.innerText);
  const rowDuration = 60; // one timesheet row is 60 minutes
  const rowHeight = dayStart.offsetHeight;

  const events = document.getElementsByClassName('event');
  for (let event of events) {
    let startTime = getMinutestamp(event.getAttribute('data-start-time'));
    let endTime = getMinutestamp(event.getAttribute('data-end-time'));
    let startPosition = (startTime - dayStartTime)/rowDuration * rowHeight;
    let eventHeight = (endTime - startTime)/rowDuration * rowHeight;

    event.style.height = eventHeight + 'px';
    event.style.top = startPosition + 'px';
  }


})();