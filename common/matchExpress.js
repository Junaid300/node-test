const regex = require('./regex');
const defaultAddressHttps = 'https://www.';
const defaultAddressHttp = 'http://www.';
const getAddress = (address) => {
  if (typeof address === 'string') {
    if (address.match(regex)) {
      console.log(address.includes(defaultAddressHttp));
    } else {
      console.log('FALSE');
    }
  } else if (typeof address === 'object') {
    address.map((a) => {
      if (a.match(regex)) {
        console.log('GOOD');
      } else {
        console.log('BAD');
      }
    });
  }
};

module.exports = getAddress;
