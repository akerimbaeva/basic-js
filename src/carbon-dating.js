const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(Ainit) {
  let A = Number(Ainit)
  if ((!Number(Ainit))||(typeof(Ainit) === "number")||(typeof(A)  === "null")||( A == NaN)||(arguments.length === 0)||(typeof(Ainit)  === "object")) {
    return false
  } else if ( A ) {
    if (A > MODERN_ACTIVITY || A < 0) {
      return false
    }
    let k = 0.693/HALF_LIFE_PERIOD
    let t = Math.ceil(Math.log(MODERN_ACTIVITY/A)/k)
    return t
  } else {
    return false
  }
}

module.exports = {
  dateSample
};
