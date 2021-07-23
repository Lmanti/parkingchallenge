const server = require('./src/app.js');
const { Port } = require('./src/utils/config/index.js');

server.listen(Port || 3001, () => {
    console.log("Server listening at 3001")
})