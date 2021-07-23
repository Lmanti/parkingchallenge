const server = require('./src/app.js');

server.listen(process.env.PORT || 3001, () => {
    console.log(`Server listening at ${process.env.PORT || 3001}`)
})