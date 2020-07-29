const jwt = require ('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs')
const User = require('../models/User');


class SessionController {
  async logIn(req, res) {
    const {name, password} = req.body;
    
    console.logo
    const user = await User.findOne({ where: { name }});

   // nome não encontrado no banco
    if (!user)
        res.sendStatus(401);

    //nome existe mais senhas não batem
    bcrypt.compare(password, user.password_hash, function(err, result) {

      if (err){
        console.log(err)
        return res.status(500).json({message: "internal error"});
      }
      if (result){

        //nome e senha batem.
        const payload = { id: user.id, role: user.role };
        console.log(process.env.APP_SECRET);

        //FIX: TODO:  trocar secrete para o env
       // const token = jwt.sign(payload, process.env.APP_SECRET,{ expiresIn: '5d'});
       const token = jwt.sign(payload, 'segredo',{ expiresIn: '5d'});
        
        return res.json({
          user: {
              id: user.id,
              name: user.name,
              role: user.role
          },
          token,
        
        });
      } else {
        // response is OutgoingMessage object that server response http request
        return response.json({success: false, message: 'passwords do not match'});
      }
    });
   
  }

  async logOut(req, res){
        return res.auth= undefined;
  }

}
module.exports = new SessionController();