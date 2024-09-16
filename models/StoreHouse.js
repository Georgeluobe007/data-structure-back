module.exports = (sequelize,DataTypes) => {
    const StoreHouse = sequelize.define("StoreHouse",{
      NameOfItem: {
          type:DataTypes.STRING,
          allowNull:false
      },
      NumbersOfCreate: {
        type:DataTypes.NUMERIC,
          allowNull:false
      },
      BottlesOfAllCreate: {
        type:DataTypes.NUMERIC,  
        allowNull:false
    },
    
    })
    return  StoreHouse;
  }
  