import * as WebSocket from "ws"
import upgradeReq from "ws"
import http from "http"

class Client {
    public readonly id: number
    public socket: WebSocket
    constructor(id: number, socket: WebSocket){
        this.id = id
        this.socket = socket
        this.socket.send('Client Created')
    }
    static from_url(url: string, socket: WebSocket){
        return new Client(Client.parse_url(url), socket)
    }
    static parse_url(url: string){
        return parseInt(url.substr(1), 10)
    }
}
class Room {
    private id: number
    private clients:  {[key: number]: Client } = {}
    private name: string

    constructor(name: string){
        this.name = name
    }
    add(client: Client){
        this.clients[client.id] = client
    }
    remove(id: number){
        delete this.clients[id]
    }
}
export class SocketServer {
    // private heartbeat: ReturnType<typeof setInterval>
    private wss: WebSocket.Server
    //private clients: WebSocket. = []

    public waiting_room: Room
    private rooms: Room[] = []

    constructor(port: number) {
        this.wss = new WebSocket.Server({port});
        this.waiting_room = new Room("waiting_room") 
       
        this.wss.on('connection', connection)
    }
}


const connection =  function(this: WebSocket.Server, socket: WebSocket, req: http.IncomingMessage) {
    console.log(this)
    SocketServerInstance.waiting_room.add(Client.from_url(req.url, socket))
    console.log(SocketServerInstance.waiting_room)
}

const SocketServerInstance = new SocketServer(8080)
export default SocketServerInstance