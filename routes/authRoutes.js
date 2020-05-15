const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// router.post('/login', (req, res, next) => {
//     try {
//         // TODO: Implement login action
//         res.data = data;
//     } catch (err) {
//         res.err = err;
//     } finally {
//         next();
//     }
// }, responseMiddleware);

router.post('/login', (req, res, next) => {

	try {
        // TODO: Implement login action
         const data ={
         	email: "sava_ukr@ukr.net",
         	password: "1111"
         };
        res.data = data;
         res.send(data)
     } catch (err) {
         res.err = err;
     } finally {
         next();
     }

}, responseMiddleware);

module.exports = router;