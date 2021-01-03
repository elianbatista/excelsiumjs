import * as WebSocket from "ws"
import upgradeReq from "ws"
export default class SocketServer {
    // private heartbeat: ReturnType<typeof setInterval>
    private wss: WebSocket.Server
    //private clients: WebSocket. = []
    private clients: { [key: number]: WebSocket } = {};
    private rooms: { [key: number]: [WebSocket] } = {};
    constructor(port: number) {
        this.wss = new WebSocket.Server({port});

        this.wss.on('connection', this.handleConnection)
    }
    private handleConnection(socket: WebSocket, req: upgradeReq ) {
        this.clients[parseInt(req.url.substr(1), 10)] = socket

        socket.send('welcome')
        socket.on('enter_room', () => socket.send('ping'))
        
    }
}