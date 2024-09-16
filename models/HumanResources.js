module.exports = (sequelize,DataTypes) => {
    const HumanResources = sequelize.define("HumanResources",{
      userName: {
          type:DataTypes.STRING,
          allowNull:false
      },
      password: {
          type:DataTypes.STRING,
          allowNull:false
      },
    
    })
    return  HumanResources;
  }
  