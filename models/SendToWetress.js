
module.exports = (sequelize,DataTypes) => {
    const SendToWetress = sequelize.define("SendToWetress",{
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
      SendToWetress.associate = (models) => {
       SendToWetress.hasMany(models.DrinksToWaiter,{
        onDelete: "cascade"
      })
      SendToWetress.hasMany(models.Confirmation,{
        onDelete: "cascade"
      })
      SendToWetress.hasMany(models.ReturnDrinks,{ 
        onDelete: "cascade"
      })
     }
    return SendToWetress;
  }