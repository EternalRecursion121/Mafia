import Server from 'socket.io';

export default function SocketServer() {
    return {
        name: "socketIO-server",
        configureServer(server) {
            const io = new Server(server.httpServer);
          
            io.on("connection", (socket) => {
                console.log("User connected");
                
                socket.on("create-game", (name, config) => {

                });
            });
        },
    }
}