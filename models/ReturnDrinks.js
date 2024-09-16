module.exports = (sequelize,DataTypes) => {
    const ReturnDrinks = sequelize.define("ReturnDrinks",{
      NameOfItem: {
          type:DataTypes.STRING,
          allowNull:false
      },
      count: {
        type:DataTypes.NUMERIC,
          allowNull:false
      }, 
      nameOfOffice: {
        type:DataTypes.STRING, 
          allowNull:false
      },
      drinkId: {
        type:DataTypes.STRING, 
          allowNull:false
      },
  })
    return  ReturnDrinks;
  }