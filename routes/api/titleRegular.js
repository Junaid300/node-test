const express = require('express');
const route = express.Router();
const getAddress = require('../../common/matchExpress');
route.get('/', (req, res) => {
  let { address } = req.query;
  getAddress(address);
});

module.exports = route;
