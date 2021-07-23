const Express = require('express');
const businesses = Express();
const { getBusinesses } = require('../controllers/Businesses.js')

businesses.get('/:location/:offset', getBusinesses)

module.exports = businesses;