module.exports = function(sequelize, DataTypes) {
  const Food = sequelize.define("Food", {
    emoji: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    version: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    group: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    subgroup: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    parent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    components: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Food;
};
