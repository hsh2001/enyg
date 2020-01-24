# enyg.js
은는이가.js

```bash
npm i enyg
```

- enyg: \[은|는\], \[이|가\] 등의 조사를 문법에 맞게 선택해줍니다.

  ```javascript  
  import enyg from 'enyg';

  enyg("그것[은|는] 왜") === "그것은 왜";
  enyg("너[이|가] 나[을|를]?") === "너가 나를?";
  ```

  다음의 조사들이 문법에 맞게 대체됩니다.
  - `[은|는]`
  - `[이|가]`
  - `[을|를]`
  - `[와|과]`


- hangulDecompose: 한글을 초성, 중성, 종성으로 분해합니다.

  ```javascript
  import { hangulDecompose } from 'enyg';
  ```

  ```javascript
  const {
    char,
    chosung,
    jungsung,
    jongsung,
  } = hangulDecompose("꽃");

  char === "꽃";
  chosung === "ㄲ";
  jungsung === "ㅗ";
  jongsung === "ㅊ";
  ```

  가 ~ 힣 사이의 문자가 아닐 경우, char 프로퍼티만 갖는 객체를 반환합니다.

  ```javascript
  hangulDecompose("ㅎ"); // { char: "ㅎ" }

  [
    ..."ㄱㅎㅏㅣ abcd 123 こんにちは。"
  ] // [ "ㄱ", "ㅎ", "ㅏ", ... ]
  .map(hangulDecompose) // [ {...}, {...}, {...}, ... ]
  .every(
    element => (
      !element.chosung &&
      !element.jungsung &&
      !element.jongsung
    )
  ); //true
  ```

- toChosung, toJungsung, toJongsung: 문자열을 초성, 중성, 종성으로 매핑합니다. 가 ~ 힣 사이의 문자만 변환됩니다.

  ```javascript
  import { toChosung } from 'enyg';

  toChosung("오늘의 기온은 20℃"); // "ㅇㄴㅇ ㄱㅇㅇ 20℃"
  toChosung("ㅋㅋㅋㅋ 진짜?"); // "ㅋㅋㅋㅋ ㅈㅉ?"
  toChosung("Hello world!"); // "Hello world!"
  toChosung("ㅏㅔㅣㅗㅜ를 읽어봐."); // "ㅏㅔㅣㅗㅜㄹ ㅇㅇㅂ."
  ```  

# 라이센스
MIT
