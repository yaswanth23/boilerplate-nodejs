// const {} = require("sequelize");

const getUserData = async () => {
  try {
    const data = await UserSchema.find();
    return data;
  } catch (e) {
    throw e;
  }
};
