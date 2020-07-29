const User = require('../models/User');



class UserController {

    //GET ALL
  async index(req, res) {
    
    console.log(req.userRole);



    if (req.userRole == 'admin' ){
      try {
        const users = await User.findAll( { 
          where: { role:'usuario'},
          attributes: ['id', 'name', 'role'],
        });
          if(users){
       
            return res.status(200).json(users);
    
          }
       } catch (error) {
         console.log(error);
       }
    } else{
        try {
          
        const users = await User.findAll({

        attributes: ['id', 'name', 'role']
        });

        if(users){
          return res.status(200).json(users);
        }
        } catch (error) {
          console.log(error);
        }

    }

  }

  async byId(req,res){

    const user = await User.findOne( {where: { id: req.params.id},
      attributes: ['id', 'name', 'role']});
    if (!user) {
        return res.status(400).json({ error: 'User not found.' });
      }

     
      return res.status(200).json(user)
  }
  // GET Role Usuario
 

  async store(req, res) {

    //confere se usuario já existe no banco
    var userExists;
    try {
         userExists = await User.findOne({ where: { name : req.body.name} }) || false;
    } catch (error) {
      console.log(error);
    }
    
    if (userExists) {
      return res.status(400).json({ error: 'User já cadastrado.' });
    }

    //por padrão todo user novo recebe a role: 'usuario'
    const { id, name, role } = await User.create(req.body);
    return res.json({ id, name, role});
  }

  async update(req, res){

    const { name , role, id  } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
         return res.status(400).json({ error: 'User not exists.' });
      }
     
        // garante que admins não editem outros admins ou super users.
        if (req.userRole == 'admin' &&  (role== 'admin' || role == 'super_admin') )
          return res.status(400).send("admin dont edit anothers admins or super admins");

      try {
        const result = await User.update(
          { name , role },
          { where: { id: req.body.id } }
        )
      
        return res. status(202).json(result);

      } catch (err) {
        console.log(err)
      }

    }

  async delete(req, res) {


    const { id } = req.params;
    //const { UserId  } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) {
        return res.status(400).json({ error: 'User not found.' });
      }
     
     if (req.userRole == 'admin' &&  (role== 'admin' || role == 'super_admin') )
         return res.status(400).send("admin dont delete anothers admins or super admins");
      
      var result = await user.destroy({
        where: {id}

      });

      return res.status(202).send(result);
 }
}
module.exports = new UserController();





