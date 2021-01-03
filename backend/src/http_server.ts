



export class HttpServer{
    constructor(app: any){
        app.get('/', (req, res) => {
            res.send('Testando Servidor HTTP')
        })
    }

}