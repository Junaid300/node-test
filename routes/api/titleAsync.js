const express = require('express');
const route = express.Router();
const getAddress = require('../../common/matchExpress');
var async = require('async');
const regex = require('../../common/regex');
const cheerio = require('cheerio');
const request = require('request');

route.get('/', async (req, res) => {

    let {address} = req.query;

let addressArray= [];
var responseData = [];
if(typeof address ==='string')
{
    if(address.match(regex))
    {
        addressArray.push(address); 
        async.map(addressArray, async (role) => {
            await request(role, (error, response, body) => {
              try {
                let $ = cheerio.load(body);
                let title = $('title').text();
                responseData.push(`${role} - ${title}`);
                 res.render('index', { data: responseData });

                
              } catch (error) {
                responseData.push(`${role} - No Response`);
                res.render('index', { data: responseData });

              }
            });
          })
        
    }
}
else if(typeof address==='object')
{
    async.map(address, async (role) => {
        if(role.match(regex))
        {

             request(role, (error, response, body) => {
                    let $ = cheerio.load(body);
                    let title = $('title').text();
                    responseData.push(`${role} - ${title}`);
                    
                 
                  })
               
        }
        else{
            responseData.push(`${role} - No Title Found`);
        }
        if(address.indexOf(role)+1 ===address.length)
        {

            res.render('index', { data: responseData });
        }
});
}});
module.exports = route;