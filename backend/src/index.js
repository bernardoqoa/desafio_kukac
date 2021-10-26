const express = require('express')
const api = require('./api')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/enviar', async (req, res) => {
    //const { data } = await api.get('/ws/52050091/json/')
    try { 
        const renda = req.body.renda
        const numDependentes = req.body.numDependentes

        //const {rendaPerCapita} = (renda, numDependentes) => (`${renda / numDependentes}`)
        
        const { data } = await api.get(`/ws/${req.body.cep}/json/`)

        return res.send({
            cep: data.cep,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
            ibge: data.ibge,
            gia: data.gia,
            ddd: data.ddd,
            siafi: data.siafi,
            rendaPerCapita: `${renda/numDependentes}`
            })
    } catch (error) {
        res.send({ error: error.message })
    }
})

app.listen(3010)