const regex = require('./regex');
const getTitleOfSite = require('./getTitle');

const getAddress = (address) => {
  let result = [];
  if (typeof address === 'string') {
    if (address.match(regex)) {
       let data= getTitleOfSite(address)
       result.push(`${address} - ${data}`)
       return result;
      } else {
      result.push(`${address} - No Title Found`)
      return result;
    }
  } else if (typeof address === 'object') {
    address.map((a) => {
      if (a.match(regex)) {
        let data= getTitleOfSite(a)
        result.push(`${a} - ${data}`);
       
        
      } else {
        // result.push("No Data Found")
        result.push(`${a} - No Title Found`)
      }
    });
    return result;
  }
};

module.exports = getAddress;
