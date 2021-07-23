const fetch = require('node-fetch');
const { Token } = require('../utils/config/index.js');

const getBusinesses = async (req, res) => {
    try {
        var businessesList = await fetch(`https://api.yelp.com/v3/businesses/search?location=${req.params.location}&categories=parking&limit=50&offset=${req.params.offset}&sort_by=rating`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Token}`
        }
        })
        .then(res => res.json())
        .then(json => businessesList = json)
        try {
            if (businessesList) {
                res.send(businessesList)
            }
        } catch (error) {
            res.send(error)
        }
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

module.exports = {
    getBusinesses
}