//Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const  Sockets = require('./sockets');

class Server {

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app); 
        //Configuración de socket server
        this.io = socketio(this.server,{ /* Configuraciones */});
    }
    middlewares(){
        //Desplegar el directorio Publico
        this.app.use(express.static(path.resolve(__dirname,'../public')));
    }
    configurarSockets(){
        new Sockets(this.io);
    }
    execute(){
        //  Inicializar middlewares
        this.middlewares();
        //Inicializar sockets
        this.configurarSockets();
        //Inicializamos servidor
        this.server.listen(this.port,()=>{
            console.log(`servidor corriendo en el puerto:${this.port}`);
        })
    }
}

module.exports = Server;