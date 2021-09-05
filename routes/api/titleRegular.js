const express = require('express');
const route = express.Router();
const getAddress = require('../../common/matchExpress');
const fs = require('fs');
const path = require('path')
const {url} = require('../../constants/config')


route.get('/', (req, res) => {

    let {address} = req.query;
      
        let responseData =  getAddress(address);
        res.render('index', { data: responseData });
   

});

module.exports = route;
