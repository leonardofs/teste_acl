require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');



async function authentication (req,res,next) {
    const authHeader = req.headers.authorization;
   
    if (!authHeader) {

        //sem token no header
      return res.status(401).json({ error: 'Token not provided' });
    }
    
        //tira o texto 'bearer'
    const [, token] = authHeader.split(' ');

    try {
      req.userId = undefined;
      req.userRole = undefined;
        //decodifica o token
      //FIX: TODO:  trocar secrete para o env

      const decoded = await promisify(jwt.verify)(token, 'segredo');
      req.userId = decoded.id;
      req.userRole = decoded.role;

      
      next();

    } catch (error) {
      //console.log(error); 
      return res.status(401).json({ error: 'Token invalid' });
    }
     
}
module.exports = authentication;