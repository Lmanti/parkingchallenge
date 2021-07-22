const fetch = require('node-fetch');
const { Token } = require('../utils/config/index.js');

const getBusinesses = async (req, res) => {
    console.log(req.params)
    try {
        var businessesList = await fetch(`https://api.yelp.com/v3/businesses/search?location=${req.params.location}&categories=parking&limit=50&offset=${req.params.offset}&sort_by=rating`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Token}`
        }
        })
        .then(res => res.json())
        .then(json => businessesList = json)
        if (businessesList) res.send(businessesList)
        else res.send("<h1>There's something bad!</h1>")
    } catch (error) {
        res.send("<h1>There's something bad!</h1>")
        console.log(error)
    }
}

module.exports = {
    getBusinesses
}