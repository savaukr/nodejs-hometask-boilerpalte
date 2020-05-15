const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get('/', function(req, res, next) {
	try {
		console.log('it is get fighterRoutes')
		res.send('it is fighter')
	}
	catch(err) {
		res.send(err)
	}
	finally {
		next()
	}
})

router.get('/:id', function(req, res, next) {
	try {
		console.log('it is get fighterRoutes id:', req.params.id)
		res.send(`it is fighter ${req.params.id}`)
	}
	catch(err) {
		res.send(err)
	}
	finally {
		next()
	}
})

router.post('/', function(req, res, next) {
	try {
		console.log('it is post fighterRoutes id:', req.params.id)
		res.send(`it is fighter post`)
	}
	catch(err) {
		res.send(err)
	}
	finally {
		next()
	}
})
router.put('/:id', function(req, res, next) {
	try {
		console.log('it is put fighterRoutes id:', req.params.id)
		res.send(`it is fighter put ${req.params.id}`)
	}
	catch(err) {
		res.send(err)
	}
	finally {
		next()
	}
})
router.delete('/:id', function(req, res, next) {
	try {
		console.log('it is delete fighterRoutes id:', req.params.id)
		res.send(`it is fighter delete ${req.params.id}`)
	}
	catch(err) {
		res.send(err)
	}
	finally {
		next()
	}
})

module.exports = router;