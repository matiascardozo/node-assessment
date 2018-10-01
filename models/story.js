
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {});
  Story.associate = function () {
    // associations can be defined here
  };
  return Story;
};
