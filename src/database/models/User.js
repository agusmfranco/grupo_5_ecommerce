const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Users";
  let cols = {
    email: {
      type: dataTypes.STRING,
      allownull: false,
    },
    name: {
      type: dataTypes.STRING,
      allownull: false,
    },
    dni: {
      type: dataTypes.INTEGER,
      allownull: false,
    },
    adress: {
      type: dataTypes.STRING,
      allownull: false,
    },
    password: {
      type: dataTypes.STRING,
      allownull: false,
    },
    birth: {
      type: dataTypes.DATEONLY,
      allownull: false,
    },
  };
  let config = {
    tablename: "users",
    timestamps: false,
  };
  const Users = sequelize.define(alias, cols, config);

  Users.associate = function (models) {
    Users.belongsTo(models.Purchase, {
      as: "purchase",
      foreignKey: "user_id",
    });
  };

  return Users;
};
