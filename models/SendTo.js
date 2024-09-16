
module.exports = (sequelize,DataTypes) => {
    const SendTo = sequelize.define("SendTo",{
      nameOfOffice: {
          type:DataTypes.STRING,
          allowNull:false
      },
      nameOfDrinks: {
        type:DataTypes.STRING,
        allowNull:false
    },
         create: {
          type:DataTypes.NUMERIC,
          allowNull:false
      },
      numbersOfBottles: {
        type:DataTypes.NUMERIC,
        allowNull:false
    },
     
    })
    return SendTo;
  }