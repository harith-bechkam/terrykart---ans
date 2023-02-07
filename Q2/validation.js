const { check } = require('express-validator');


exports.validatefields = [
    check('mailing_name').trim().notEmpty().withMessage('Name is empty!').isString().isLength({ min: 3, max: 20 }).withMessage('Name must be within 3 to 20 characters!'),
    check('email').trim().isEmail().withMessage('Invalid email!'),
    check('password').trim().notEmpty().withMessage('password is empty!').isLength({ min: 5, max: 20 }).withMessage('password must be 5 to 20 characteres long!'),
    check('state').trim().notEmpty().withMessage('state is empty!').isString().isLength({ min: 3, max: 20 }).withMessage('state must be within 3 to 20 characters!'),
    check('country').trim().notEmpty().withMessage('country is empty!').isString().isLength({ min: 3, max: 20 }).withMessage('country must be within 3 to 20 characters!'),
    check('gst_no').trim().notEmpty().withMessage('gst_no is empty!').isString().isLength({ min: 3, max: 20 }).withMessage('gst_no must be within 3 to 20 characters!'),
    check('pan_no').trim().notEmpty().withMessage('pan_no is empty!').isString().isLength({ min: 3, max: 20 }).withMessage('pan_no must be within 3 to 20 characters!'),
]




// module.exports = {validatefields};