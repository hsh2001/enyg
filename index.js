const enyg = require('./dist/enyg.js');
const hangulDecompose = require('./dist/hangulDecompose.js');

module.exports = Object.assign(enyg, {
  hangulDecompose,
});
