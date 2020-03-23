const hangulDecompose = require('./hangulDecompose.js');

const cache = {};

function _useCache(cacheKey, key, getValue) {
  const currentCache = (cache[cacheKey] = cache[cacheKey] || {});
  return (currentCache[key] = currentCache[key] || getValue());
}

function _getElement(_char, type) {
  const { char, [type]: element } = hangulDecompose(_char);
  return element || char;
}

function _mapToElement(string, type) {
  return [...string].map((char) => _getElement(char, type)).join('');
}

function _mapToElementWithCache(string, type) {
  string = String(string);
  return _useCache(type, string, () => _mapToElement(string, type));
}

function toChosung(string) {
  return _mapToElementWithCache(string, 'chosung');
}

function toJungsung(string) {
  return _mapToElementWithCache(string, 'jungsung');
}

function toJongsung(string) {
  return _mapToElementWithCache(string, 'jongsung');
}

module.exports = {
  toChosung,
  toJungsung,
  toJongsung,
};
