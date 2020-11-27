const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Purchase";
  let cols = {
    total: {
      type: dataTypes.INTEGER,
    },
    user_id: {
      type: dataTypes.INTEGER,
    },
    product_id: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tablename: "purchase",
    timestamps: false,
  };
  const Purchase = sequelize.define(alias, cols, config);

  Purchase.associate = function (models) {
    Purchase.hasMany(models.Users, {
      as: "users",
      foreignKey: "user_id",
    });
    Purchase.belongsToMany(models.Books, {
      as: "books",
      through: "books_purchase",
      foreignKey: "book_id",
      otherKey: "purchase_id",
      timestamps: false,
    });
  };

  return Purchase;
};
