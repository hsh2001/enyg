const enyg = require('./dist/enyg.js');
const hangulDecompose = require('./dist/hangulDecompose.js');
const to = require('./dist/to.js');

module.exports = Object.assign(enyg, {
  hangulDecompose,
  ...to,
});
