const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.get('/', function(req, res, next) {
	try {
		const user = {
			name: "userName"
		}
         res.data = user;
         res.send('data is sended')
     } catch (err) {
         res.err = err;
     } finally {
         next();
     }


})
router.get('/:id', function(req, res, next) {
	try {
		const user = {
			name: "userName"
		}
         res.data = req.params.id
         res.send(`data is sended with id: ${req.params.id}`)
     } catch (err) {
         res.err = err;
     } finally {
         next();
     }


})

router.post('/', function(req, res,next) {
	console.log("it is post of user");
	res.send('user post response!!')
})

router.put('/:id', function(req, res,next) {
	console.log("it is put of user")
	res.send("it is put of user")
})

router.delete('/:id', function(req,res, next){
	console.log("it is delete of user")
	res.send("it is put of user")	
})

module.exports = router;