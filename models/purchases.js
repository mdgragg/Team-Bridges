module.exports = function(sequelize, DataTypes) {
  const Purchases = sequelize.define("Purchases", {
    totalItems: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  return Purchases;
};
