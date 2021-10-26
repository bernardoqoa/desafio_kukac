const axios = require('axios')

const api = axios.create({
    baseURL: "https://viacep.com.br/"
})

module.exports = api