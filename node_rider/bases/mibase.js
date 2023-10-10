import  {Sequelize} from "sequelize";

const bd = new Sequelize('aprendiz','root','administrador',{
    host: 'localhost',
    dialect: 'mysql'   
})

export default bd;