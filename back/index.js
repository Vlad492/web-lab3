const express = require('express')
const app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json({ type: 'application/*+json' }))


const { Client } = require('pg')
const client = new Client('postgres://vlad:vlad@localhost:5432/weblab3')
await client.connect()


app.post('/validate',(req,res)=>{
    
    const data = await client.query(`SELECT * from users where '${req.body.login}'`)
    if(data.rows.length > 0 && data.rows[0].password == req.body.password){
        res.sendStatus(202)
    }else{
        res.sendStatus(401)
    }

})
app.post('/create',(req,res)=>{
    
    const res = await client.query(`INSERT into users (login,password) values ('${req.body.login},${req.body.password}')`)
    res.sendStatus(201)

})

app.listen(process.env.PORT || 3000)