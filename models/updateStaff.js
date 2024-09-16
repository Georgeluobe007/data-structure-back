
module.exports = (sequelize,DataTypes) => {
    const updateStaff = sequelize.define("updateStaff",{
      description: {
          type:DataTypes.STRING,
          allowNull:false
      },
         amount: {
          type:DataTypes.NUMERIC,
          allowNull:false
      },
   
    })
    return updateStaff;
  }