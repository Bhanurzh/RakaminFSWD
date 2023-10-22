const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (email) => {
    const token = jwt.sign(
        { email },
        'saya_sudah_pusing_sama_jwt',
        {
            expiresIn: "3h",
        }
    );

    return token;
};

module.exports = { generateToken };