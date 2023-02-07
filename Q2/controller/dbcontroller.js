
const customer = require('../models/customer')
const { validationResult } = require('express-validator');
const DBController = () => {

    const create = async (req, res) => {

          //If there is any error in register input fields it will display the required error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = errors.array()
        return res.status(400).json({
            success: false,
            error: err[0].msg
        });
    }


        let result = customer.create(req.body)
        await result
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    const read = async (req, res) => {
        let result = customer.findAll({})
        await result
        .then(data => res.json(data))
        .catch(err => res.json(err))
    }

    return {
        create,
        read
    }
}

module.exports = DBController()