module.exports = (Sequelize, DataTypes) => {
  const posts = Sequelize.define("posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  posts.associate = (models) => {
    posts.hasMany(models.comments, {
      onDelete: "cascade",
    });
  };
  return posts;
};
