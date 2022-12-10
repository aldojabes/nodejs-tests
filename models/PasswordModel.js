import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Password = db.define('passwords',{
    website:{
        type: DataTypes.STRING
    },
    pass:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Password;