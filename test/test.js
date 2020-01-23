// import enyg, { hangulDecompose } from '../index.js';

const enyg = require('../index.js');
const {
  hangulDecompose,
  toChosung,
} = enyg;

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

[
  "가을",
  "하늘",
].map(toChosung)
.forEach(
  o => console.log(o)
)
