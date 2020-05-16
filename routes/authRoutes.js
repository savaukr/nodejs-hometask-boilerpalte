const { Router } = require('express');
const AuthService  = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', (req, res, next) => {
	try {
        // TODO: Implement login action
        //ok
         const data ={
         	email: req.body.email,
         	password: req.body.password
         };
         const user = AuthService.login(data);
        //res.data = data;
        res.send(user)
     } catch (err) {
         res.status(400).send(err.message)
     } finally {
         next();
     }

}, responseMiddleware);

module.exports = router;