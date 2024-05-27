const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    const htmlFilePath = path.join((__dirname, 'index.html'))
    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading HTML file')
        }
        res.status(200).send(data)
    })
})


app.get('film-locations', async (req, res) => {
    try {
        const response = await axios.get('https://data.sfgov.org/resource/wwmu-gmzc.json')
        const filmLocations = response.data
        res.status(200).json(filmLocations)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch film locations' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})