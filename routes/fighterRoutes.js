const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');
const { addDefense } = require('../services/fighterAddDefenseService');

const router = Router();

// TODO: Implement route controllers for fighter
//ok
router.get('/', function(req, res, next) {
    const fighters = FighterService.getAllFighters();
	if (fighters) {
        console.log(fighters);
        res.send(fighters);
    } else {
        const error = {
            error: true,
            message:"Fighter not got, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})
router.get('/:id', function(req, res, next) {
    const fighter = FighterService.getOneFighter(req.params.id);;
	if (fighter) {
        console.log(fighter);
        res.send(fighter);
    } else {
        const error = {
            error: true,
            message:"Fighter not got, error!"
        };
        res.status(404).send(JSON.stringify(error));
    }	

})

router.post('/', createFighterValid, function(req, res) {
    let data = { ...req.body};
    data = addDefense(req.body, 6);
    const fighter = FighterService.create(data); 
    if (fighter) {
        console.log(fighter);
        res.send("Fighter create successful");
    } else {
        const error = {
            error: true,
            message:"Fighter not create, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})

router.put('/:id', updateFighterValid, function(req, res ) {
    const dataToUpdate = req.body;
    const fighter = FighterService.update(req.params.id, dataToUpdate);
    if (fighter) {
        console.log('fighter:', fighter);
        res.send("Fighter update successful");
    } else {
        const error = {
            error: true,
            message:"Fighter not update, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})

router.delete('/:id', function(req,res){
    const fighter = FighterService.delete(req.params.id);
    if (fighter) {
        console.log('fighter:', fighter);
        res.send("Fighter delete successful");
    } else {
        const error = {
            error: true,
            message:"Fighter not delete, error!"
        };
        res.status(400).send(JSON.stringify(error));
    }	
})
module.exports = router;