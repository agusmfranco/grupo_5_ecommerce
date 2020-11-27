const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  let alias = "Books";
  let cols = {
    title: {
      type: dataTypes.STRING,
      allownull: false,
    },
    isbn: {
      type: dataTypes.INTEGER,
      allownull: false,
    },
    sinopsis: {
      type: dataTypes.STRING,
    },
    price: {
      type: dataTypes.INTEGER,
    },
    amount: {
      type: dataTypes.INTEGER,
    },
    autor_id: {
      type: dataTypes.INTEGER,
    },
    genre_id: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tablename: "books",
    timestamps: false,
  };
  const Books = sequelize.define(alias, cols, config);

  Books.associate = function (models) {
    Books.belongsToMany(models.Purchase, {
      as: "purchase",
      through: "book_purchase",
      foreignKey: "purchase_id",
      otherKey: "book_id",
      timestamps: false,
    });
    Books.belongsTo(models.Autors, {
      as: "autors",
      foreignKey: "autor_id",
    });
    Books.belongsTo(models.Genres, {
      as: "genres",
      foreignKey: "genre_id",
    });
  };

  return Books;
};
