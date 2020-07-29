const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
require('dotenv').config();

class User extends Sequelize.Model{
  static init(sequelize) {
    super.init(
      {
        
        name: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        role: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    //hook para salvar password cryptografado no banco
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 5);
      }
    });

    return this;
  }
}
module.exports = User;