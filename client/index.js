import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import mojs from 'mo-js';

ReactDOM.render(<App/>, document.getElementById('root'));
console.log(mojs);

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:        'circle',
    radius:       20,
    fill:       [ 'deeppink', 'cyan', 'yellow' ],
    strokeWidth:  5,
    duration:     2000
  }
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .setSpeed(3)
    .replay();
} );