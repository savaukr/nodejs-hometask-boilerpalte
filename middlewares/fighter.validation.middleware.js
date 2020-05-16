const { fighter } = require('../models/fighter');

//можливо  fighter предати в параметри 
const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    //ok
    const error = validFighter({...req.body}, fighter);
    if (!error.error) {
        next()
    } else {
        res.status(401).send(JSON.stringify(error));
    }
}
//можливо  fighter предати в параметри 
const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    //ok
    const error = validFighter(req.body, fighter);
    if (!error.error) {
        next()
    } else {
        res.status(401).send(JSON.stringify(error));
    }
}


const validFighter = (reqBody, modelFighter) => {
    const error = {
        error: false,
        message: ''
    }
    for ( var prop in reqBody ) {
        if (modelFighter[prop] !== undefined) {
            switch(prop) {
                case 'power':
                    if ( reqBody[prop] > 99 ) {
                        error.error = true;
                        error.message += ` ${prop} is not valid`;
                    }
                    break;
                default: 
                    break;
            }
        } else {
            error.error = true;
            error.message = 'field dose not in model of Fighter!'
            return error;
        }
    }
    return error;
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;