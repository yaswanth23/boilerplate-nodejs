const Base = require("../base");

class PingBao extends Base {
  constructor() {
    super();
  }

  async getPing() {
    try {
        
      let response = {
        msg: "Welcome to LCX wallet API service",
      };
      return response;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = PingBao;
