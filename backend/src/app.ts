import express from "express";
import { createServer, Server } from 'http';

import * as WebSocket from "ws"
import SocketServer from "./socket_server";
class App {
    public app: express.Application
    public server: Server
    public io
    public PORT: number = 3000

    constructor() {
        this.routes()
        this.io = new SocketServer(8080)

    }

    routes() {
        this.app = express()
        this.app.get( "/", ( req, res ) => {
            res.send( "Hello world!" )
        } )
        this.server = this.app.listen(3001)
    }
}

export default new App();