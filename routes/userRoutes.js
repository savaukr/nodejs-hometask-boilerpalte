const { Router } = require('express');
const UserService = require('../services/userService');

const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();

// TODO: Implement route controllers for user
//ok

router.get('/', function(req, res, next) {
    const users = UserService.getAllUsers();
	if (users) {
        //console.log(users);
        res.send(users);
    } else {
        const error = {
            error: true,
            message:"Users not got, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})
router.get('/:id', function(req, res, next) {
    const user = UserService.getOneUser(req.params.id);;
	if (user) {
        //console.log(user);
        res.send(user);
    } else {
        const error = {
            error: true,
            message:"User not got, error!"
        };
        res.status(404).send(JSON.stringify(error));
    }	

})

router.post('/', createUserValid, function(req, res) {
    const user = UserService.create(req.body);
    if (user) {
        //console.log('router.post:',user);
        res.send("User create successful");
    } else {
        const error = {
            error: true,
            message:"User not create, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})

router.put('/:id', updateUserValid, function(req, res ) {
    const dataToUpdate = req.body;
    const user = UserService.update(req.params.id, dataToUpdate);
    if (user) {
        //console.log('user:', user);
        res.send("User update successful");
    } else {
        const error = {
            error: true,
            message:"User not update, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})

router.delete('/:id', function(req,res){
    const user = UserService.delete(req.params.id);
    if (user) {
        //console.log('user:', user);
        res.send("User delete successful");
    } else {
        const error = {
            error: true,
            message:"User not delete, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})

module.exports = router;