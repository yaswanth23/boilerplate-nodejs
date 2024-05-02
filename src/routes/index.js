const PingRouter = require("./ping/ping.router");

const init = (app) => {
    app.use('/api/v1', PingRouter);
}

module.exports = init;

