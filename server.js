const express = require ('express')

const app = express()
app.get('/', (req , res) => {
    res.send('<h1> this is the first page <h1/>')
})
app.use(express.json())
app.listen(5000, (err) => {
    if (err) {
        throw err
    }
    else{
        console.log('server up and is runnig...')
    }
})