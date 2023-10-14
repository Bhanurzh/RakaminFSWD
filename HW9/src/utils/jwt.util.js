const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (email) => {
    const token = jwt.sign(
        { email },
        'saya_sudah_pusing_sama_jwt',
        {
            expiresIn: "12h",
        }
    );

    return token;
};

module.exports = { generateToken };