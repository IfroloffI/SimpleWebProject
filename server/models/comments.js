module.exports = (Sequelize, DataTypes) => {
  const comments = Sequelize.define("comments", {
    commentText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return comments;
};
