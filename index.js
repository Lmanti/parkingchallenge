const server = require('./src/app.js');

server.listen(process.env.PORT || 3001, () => {
    console.log(`SERVER LISTENING AT ${process.env.PORT}`)
})