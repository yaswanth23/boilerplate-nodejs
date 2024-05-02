const { PingBao } = require("../../bao");

const getPing = async (req, res, next) => {
  try {
    const pingBao = new PingBao();
    const result = await pingBao.getPing();
    return res.status(200).json(result);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getPing,
};
