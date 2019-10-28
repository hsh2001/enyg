import hangulDecompose from './hangulDecompose.js';

const target = [
  [ "은", "는" ],
  [ "이", "가" ],
  [ "을", "를" ],
  [ "과", "와" ],
];

export default function enyg(str) {
  target.forEach(selector => {
    const query = `[${selector.join('|')}]`;
    while (str.includes(query)) {
      const prevCharIndex = str.indexOf(query) - 1;
      const prevChar = str[prevCharIndex] || "";
      const result = hangulDecompose(prevChar).coda
                     ? selector[0]
                     : selector[1];
      str = str.replace(query, result);
    }
  });
  return str;
}
