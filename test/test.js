import hangulDecompose from '../core/hangulDecompose.js';
import enyg from '../core/enyg.js';

const textarea = document.getElementById('textarea');
const result = document.getElementById('result');

textarea.innerHTML = textarea.innerHTML.trim();
result.innerHTML = enyg(textarea.value);
window.hangulDecompose = hangulDecompose;
window.enyg = enyg;

Array
.from("가나다핳헿쀍뾹뀱ㅔㅋ")
.map(hangulDecompose)
.forEach(o => console.log(o));

textarea.addEventListener('keyup', event => {
  result.innerHTML = enyg(textarea.value).replace(/\n/g, "<br>");
}, false);
