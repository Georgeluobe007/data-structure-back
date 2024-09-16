module.exports = (sequelize,DataTypes) => {
    const RegProduct = sequelize.define("RegProduct",{
      ProductName: {
          type:DataTypes.STRING,
          allowNull:false
      },
        quantity: {
        type:DataTypes.NUMERIC,
        allowNull:false
    },
    
    })
    return  RegProduct;
  }
  