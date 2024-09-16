module.exports = (sequelize,DataTypes) => {
    const AddToOffice = sequelize.define("AddToOffice",{
      officeName: {
          type:DataTypes.STRING,
          allowNull:false
      }, 
      password: {
        type:DataTypes.STRING,
        allowNull:false
    }, 
    })
    AddToOffice.associate = (model) => {
      AddToOffice.hasMany(model.SendTo,{
       onDelete: "cascade"
      }) 
       AddToOffice.hasMany(model.SendToWetress,{
        onDelete: "cascade"
       })
       AddToOffice.hasMany(model.DrinksToWaiter,{
        onDelete: "cascade"
       })   
       AddToOffice.hasMany(model.Confirmation,{
        onDelete: "cascade"
       })  
       AddToOffice.hasMany(model.WaitressLogIn,{
        onDelete: "cascade"
       }) 
       AddToOffice.hasMany(model.ReturnDrinks,{
        onDelete: "cascade"
       }) 
       AddToOffice.hasMany(model.PutPrice,{
        onDelete: "cascade"
       })   
     }
    return  AddToOffice;
  }
  