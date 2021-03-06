module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hashtag', {
    text : {
      type : DataTypes.STRING(140),
      allowNull : false,
    },
    boardId : {
      type : DataTypes.INTEGER(11),
      allowNull : false,
    },
  }, {
    timestamps : true, // true -> createdAt, updatedAt column생성
  })
};
