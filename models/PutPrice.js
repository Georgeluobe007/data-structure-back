module.exports = (sequelize,DataTypes) => {
    const PutPrice = sequelize.define("PutPrice",{
      NameOfItem: {
          type:DataTypes.STRING,
          allowNull:false
      },
      NameOfOffice: {
          type:DataTypes.STRING,
          allowNull:false
      },
      PriceOfItem: {
        type:DataTypes.NUMERIC,
        allowNull:false
    },
    
    })
    return  PutPrice;
  }
  