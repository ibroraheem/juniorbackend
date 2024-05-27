require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    const htmlFilePath = path.join((__dirname, 'index.html'))
    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading HTML file')
        }
        res.status(200).send(data)
    })
})
app.use('/', require('./routes/departure'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
