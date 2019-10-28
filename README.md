# ENYG.js
은는이가.js

```javascript
import enyg from './core/enyg.js';
```

```
string enyg(string);
```
\[은|는\], \[이|가\], \[을|를\]를 문법에 맞게 선택해줍니다.

예:
```javascript
enyg("그것[은|는] 왜") === "그것은 왜";
enyg("너[이|가] 나[을|를]?") === "너가 나를?";
```

# 지원
ES2017~

# 라이센스
MIT
