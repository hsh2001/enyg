
//음절(syllable),
//초성(chosung),
//중성(jungsung),
//종성(jongsung)

const hangulSyllable = {
  chosung: Array.from(
    "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"
  ),

  jungsung: Array.from(
    "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ"
  ),

  jongsung: Array.from(
    "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ"
  ),
};

hangulSyllable.jongsung.unshift("");

const getCharCode = s => String(s).charCodeAt();

/**
*  @param {String} char 길이가 1인 문자열
*/
module.exports = function hangulDecompose(char) {
  let [chosung, jungsung, jongsung,] = Array(3).fill("");
  const charCode = getCharCode(char);

  if (getCharCode("가") <= charCode && charCode <= getCharCode("힣")) {
    //문자가 한글임.
    const hangulIndex = charCode - getCharCode("가");
    let chosungCode, jungsungCode, jongsungCode;
    jongsungCode = hangulIndex % 28;
    jungsungCode = ((hangulIndex - jongsungCode) / 28 ) % 21;
    chosungCode = Math.floor(((hangulIndex - jongsungCode) / 28 ) / 21);
    chosung = hangulSyllable.chosung[chosungCode];
    jungsung = hangulSyllable.jungsung[jungsungCode];
    jongsung = hangulSyllable.jongsung[jongsungCode];
  } else {
    return { char, };
  }

  return {
    char,
    chosung,
    jungsung,
    jongsung,
  };
};
