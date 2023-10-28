const { validationResult } = require('express-validator');
const todoRequirements = require('./todo.requirement');

const requirements = {
    ...todoRequirements
};

function validate(validations) {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        return res.status(400).json({
            status: "failed",
            message: "Invalid form",
            errors: errors.array(),
        });
    };
}

module.exports = {
    requirements,
    validate,
};