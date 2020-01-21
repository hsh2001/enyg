// import hangulDecompose from '../core/hangulDecompose.js';
// import enyg from '../enyg.js';

const enyg = require('../dist/enyg.js');
const { hangulDecompose } = enyg;

console.log(
  enyg(
    "다람쥐[은|는] 헌 쳇바퀴[이|가] 타고파. 나[은|는] 너[을|를] 좋아해."
  )
);

Array
.from("가나다핳헿쀍뾹뀱ㅔㅋ")
.map(hangulDecompose)
.forEach(
  o => console.log(o)
);
