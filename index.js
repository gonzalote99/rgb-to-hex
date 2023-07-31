// Import stylesheets
import './style.css';
import rgbHex from './y.js'
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>rgb to hex</h1>

<p>example rgbHex(20, 43, 43) expected => 142b2b</p>`;


console.log(rgbHex(20, 43, 43));

console.log(rgbHex('rgb(43, 55, 189)'));

