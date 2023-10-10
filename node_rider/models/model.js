import bd from '../bases/mibase.js';
import { DataTypes } from 'sequelize';


    const datos = bd.define('aprendices', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        apellido: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      });
    

export default datos;

// Ejemplo de definición de modelo usando Sequelize
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(/* tu conexión a la base de datos */);


// Sincronizar el modelo con la base de datos
// Aprendiz.sync()
//   .then(() => {
//     console.log('Modelo de Aprendiz sincronizado con la base de datos');
//   })
//   .catch((error) => {
//     console.error('Error al sincronizar el modelo de Aprendiz:', error);
//   });
