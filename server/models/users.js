module.exports = (Sequelize, DataTypes) => {
  const users = Sequelize.define("users", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //users.associate = (models) => {
  //  users.hasMany(models.posts, {
  //    onDelete: "cascade",
  //  });
  //};
  return users;
};
