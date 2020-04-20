//음절(syllable),
//초성(chosung),
//중성(jungsung),
//종성(jongsung)

const hangulSyllable = {
  chosung: [...'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'],
  jungsung: [...'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'],
  jongsung: ['', ...'ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'],
} as const;

function getCharCode(s: string): number {
  return String(s).charCodeAt(0);
}

interface DecomposedHangul {
  char: string;
  chosung?: string;
  jungsung?: string;
  jongsung?: string;
}

export default function hangulDecompose(char: string): DecomposedHangul {
  let chosung: string | void;
  let jungsung: string | void;
  let jongsung: string | void;
  const charCode = getCharCode(char);

  if (getCharCode('가') <= charCode && charCode <= getCharCode('힣')) {
    //문자가 한글임.
    const hangulIndex = charCode - getCharCode('가');
    const jongsungCode = hangulIndex % 28;
    const jungsungCode = ((hangulIndex - jongsungCode) / 28) % 21;
    const chosungCode = Math.floor((hangulIndex - jongsungCode) / 28 / 21);
    chosung = hangulSyllable.chosung[chosungCode];
    jungsung = hangulSyllable.jungsung[jungsungCode];
    jongsung = hangulSyllable.jongsung[jongsungCode];
  } else {
    return { char };
  }

  return {
    char,
    chosung,
    jungsung,
    jongsung,
  };
}
