const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT = 8080 
const server = app.listen(PORT, () => {
    console.log(`Port started on 127.0.0.1:${PORT}`)
})

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('CONNECTED!!!')
})
