const net = require('net')

const server = net.createServer (socket => {
    socket.write("Welcome, state your name and tech stack \n")
    socket.on("data", (data) => {
        console.log(data.toString())
    })
})

server.listen(8080)
