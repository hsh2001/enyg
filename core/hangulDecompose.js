
//음절(syllable),
//초성(onset),
//중성(nucleus),
//종성(coda)

const hangulSyllable = {
  onset: Array.from(
    "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"
  ),

  nucleus: Array.from(
    "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ"
  ),

  coda: Array.from(
    "ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ"
  ),
};

hangulSyllable.coda.unshift("");

const getCharCode = s => String(s).charCodeAt();

/**
*  @param {String} char 길이가 1인 문자열
*/
export default function hangulDecompose(char) {
  let [onset, nucleus, coda,] = Array(3).fill("");
  const charCode = getCharCode(char);

  if (getCharCode("가") <= charCode && charCode <= getCharCode("힣")) {
    //문자가 한글임.
    const hangulIndex = charCode - getCharCode("가");
    let onsetCode, nucleusCode, codaCode;
    codaCode = hangulIndex % 28;
    nucleusCode = ((hangulIndex - codaCode) / 28 ) % 21;
    onsetCode = Math.floor(((hangulIndex - codaCode) / 28 ) / 21);
    onset = hangulSyllable.onset[onsetCode];
    nucleus = hangulSyllable.nucleus[nucleusCode];
    coda = hangulSyllable.coda[codaCode];
  } else {
    return { char, };
  }

  return {
    char,
    onset,
    nucleus,
    coda,
  };
};
