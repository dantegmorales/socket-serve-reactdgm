
class Sockets {
    //constructor 
    constructor(io){

        this.io = io;
        this.socketEvents();
    }
    //Metodo SocketEvents
    socketEvents (){
        //On conection 
        this.io.on('connection', (socket) => {
            //Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server',(data)=>{
                console.log('data del cliente:',data);
                //Emite el evento:mensaje-from-server
                this.io.emit('mensaje-from-server',data);
            });
        });
    }

}

module.exports = Sockets;