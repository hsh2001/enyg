import hangulDecompose from './hangulDecompose';

type decomposedHandulTypes = 'char' | 'chosung' | 'jungsung' | 'jongsung';

function _getElement(_char: string, type: decomposedHandulTypes): string {
  const { char, [type]: element } = hangulDecompose(_char);
  return element || char;
}

function _mapToElement(string: string, type: decomposedHandulTypes): string {
  return [...string].map((char) => _getElement(char, type)).join('');
}

type HangulToFunction = (str: string) => string;

export const toChosung: HangulToFunction = (string) => {
  return _mapToElement(string, 'chosung');
};

export const toJungsung: HangulToFunction = (string) => {
  return _mapToElement(string, 'jungsung');
};

export const toJongsung: HangulToFunction = (string) => {
  return _mapToElement(string, 'jongsung');
};
