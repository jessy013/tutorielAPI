module.exports = (sequelize, Sequelize) =>{
    const tutorial = sequelize.define("tutorial",{
      title: {
          type: Sequelize.STRING
      },
      published:{
          type: Sequelize.BOOLEAN
      }  
    });

    return tutorial;

};