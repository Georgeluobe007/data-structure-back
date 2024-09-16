module.exports = (sequelize,DataTypes) => {
    const  Confirmation = sequelize.define("Confirmation",{
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
    return  Confirmation;
  }