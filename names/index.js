let getFirstNames = require("../utilities/utils/index.js");
let names = require("../country/state/city/index.js");
function getPeopleInCity(names) {
  let res = getFirstNames(names);
  return res;
}
module.exports = getPeopleInCity;
