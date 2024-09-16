module.exports = (sequelize,DataTypes) => {
    const CostomersBill = sequelize.define("CostomersBill",{
        TableName: {
            type:DataTypes.STRING,
            allowNull:false
        },
        WaiterId: {
            type:DataTypes.NUMERIC,
            allowNull:false
        },
        NameOfItem: {
            type:DataTypes.STRING,
            allowNull:false
        },
        PriceOfItem: {
            type:DataTypes.NUMERIC,
            allowNull:false
        },
        Count: {
            type:DataTypes.NUMERIC,
            allowNull:false
        },
        SubTotal: {
            type:DataTypes.NUMERIC,
            allowNull:false
        },
    })
    return CostomersBill
}