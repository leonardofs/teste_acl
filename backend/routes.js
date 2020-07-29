const UserController =   require('./src/controllers/UserController');
const SessionController = require('./src/controllers/SessionController');
const PacketsController = require('./src/controllers/PacketsController');

const Authentication = require('./src/services/auth/authentication');
const Authorization = require('./src/services/auth/authorization');


var express = require('express');
const router = express.Router();

router.post('/login', SessionController.logIn);

router.post('/logout', SessionController.logOut);

//cria usuario
router.post('/user', UserController.store);


// rotas abaixo são privadas a login
router.use(Authentication);

router.get('/packets', PacketsController.index );

router.get('/user/:id',Authorization(['super_admin', 'admin']),  UserController.byId)

router.get('/users', Authorization(['super_admin', 'admin']),  UserController.index);

router.post('/user/delete/:id', Authorization(['super_admin', 'admin']), UserController.delete);

router.post('/user/update', Authorization(['super_admin', 'admin']), UserController.update);

module.exports = router;

