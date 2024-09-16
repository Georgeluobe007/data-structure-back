module.exports = (sequelize,DataTypes) => {
    const WaitressLogIn = sequelize.define("WaitressLogIn",{
      UserName: {
          type:DataTypes.STRING,
          allowNull:false
      },
      Password: {
        type:DataTypes.STRING,
          allowNull:false
      },
      
    })
    WaitressLogIn.associate = (model) => {
      WaitressLogIn.hasMany(model.DrinksToWaiter,{
        onDelete: "cascade"
       })
       WaitressLogIn.hasMany(model.Confirmation,{
        onDelete: "cascade"
       }) 
       WaitressLogIn.hasMany(model.ReturnDrinks,{
        onDelete: "cascade"
       })
       WaitressLogIn.hasMany(model.TableName,{
        onDelete: "cascade"
       })    
     }
    return  WaitressLogIn;
  }