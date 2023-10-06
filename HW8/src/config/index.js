require("dotenv").config();

const config = {
    PORT: parseInt(process.env.PORT) || 3000,
    API: process.env.API || "api/v1",
};

module.exports = config;