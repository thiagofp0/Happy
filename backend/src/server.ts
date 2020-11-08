import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send("Teste");
})

app.listen(3333);