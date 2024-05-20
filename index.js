import  express from "express"
import * as http from "http";
import cors from 'cors'

const app = express()

app.use(cors({origin: '*'}))

app.get('/', (req, res) => {
    res.send('Я тута')
})

const server = http.createServer(app)




server.listen(4488, () => {
    console.log('Server run')
})