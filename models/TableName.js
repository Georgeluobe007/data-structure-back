module.exports = (sequelize,DataTypes) => {
    const TableName = sequelize.define("TableName",{
        officeName: {
            type:DataTypes.STRING,
            allowNull:false
        },
    })
    TableName.associate = (models) => {
        TableName.hasMany(models.CostomersBill,{
         onDelete: "cascade"
       })
    }
    return TableName
}