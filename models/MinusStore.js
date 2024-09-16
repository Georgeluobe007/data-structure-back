module.exports = (sequelize,DataTypes) => {
    const MinusStore = sequelize.define("MinusStore",{
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
    return  MinusStore;
  }