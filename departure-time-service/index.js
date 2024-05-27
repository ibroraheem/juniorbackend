require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')


const app = express()
const PORT = process.env.PORT || 3000

app.use('/', require('./routes/departure'))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
