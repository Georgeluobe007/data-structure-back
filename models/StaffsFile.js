
module.exports = (sequelize,DataTypes) => {
  const StaffsFile = sequelize.define("StaffsFile",{
    surname: {
        type:DataTypes.STRING,
        allowNull:false
    },
    name: {
        type:DataTypes.STRING,
        allowNull:false
    },
    sex: {
        type:DataTypes.STRING,
        allowNull:false
    },
    photo: {
        type:DataTypes.STRING,
        allowNull:false
    },
    age: {
        type:DataTypes.NUMERIC,
        allowNull:false
    },
    salary: {
        type:DataTypes.NUMERIC,
        allowNull:false
    }
  })
  StaffsFile.associate = (module) => {
  StaffsFile.hasMany(module.updateStaff,{
    onDelete:"cascade"
  })
  }
  return StaffsFile;
}

