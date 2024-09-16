module.exports = (sequelize,DataTypes) => {
    const DrinksToWaiter = sequelize.define("DrinksToWaiter",{
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
  })
    return  DrinksToWaiter;
  }