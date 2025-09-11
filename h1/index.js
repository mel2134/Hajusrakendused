const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());        // Avoid CORS errors in browsers
app.use(express.json()) // Populate req.body

const widgets = new Map()
widgets.set(1,{name:"Cizzbor",price:29.99})
widgets.set(2,{name:"Woowo",price:26.99})
widgets.set(3,{name:"Crazlinger",price:59.99})
widgets.set(5,{name:"Crazlinger",price:59.99})

function GetWidgets(){
    var str = ""
    for (var [key, element] of widgets) {
        str += `<a href="/widgets/${key}">Widget ${key} (${element.name})</a><br>`
    }
    return str
}
app.get('/',(req,res) =>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Widgets</title>
</head>
<body>
    <a href="/widgets">All Widgets</a><br>`
    +
    GetWidgets()
    +
`</body>
</html>`)
})

app.get('/widgets', (req, res) => {
    var list = []
    for (var [key, element] of widgets) {
        list.push({id:key,name:element.name,price:element.price})
    }
    res.send(list)
})

app.get('/widgets/:id', (req, res) => {
    var parsedId = parseInt(req.params.id)
    if(!parsedId){
        return res.status(400).send({ error: 'ID needs to be an integer' })
    }
    var widget = widgets.get(parsedId)
    if(!widget){
        return res.status(404).send({ error: "Widget not found" })
    }
    res.send(widget)
})
app.delete('/widgets/:id',(req,res)=>{
    var parsedId = parseInt(req.params.id)
    if(!parsedId){
        return res.status(400).send({ error: 'ID needs to be an integer' })
    }
    if(!widgets.has(parsedId)){
        return res.status(404).send({ error: "Widget not found" })
    }
    widgets.delete(parsedId)
    return res.status(204).send()
})

app.post('/widgets', (req, res) => {
    if(!req.body){
        return res.status(400).send({ error: 'JSON body is missing!' })
    }
    if (!req.body.price) {
        return res.status(400).send({ error: 'Price is missing!' })
    }
    if(!req.body.name){
        return res.status(400).send({ error: 'Name is missing!' })
    }
    var newId = Math.max(...widgets.keys()) + 1

    widgets.set(newId,{id:newId,name:req.body.name,pice:req.body.price})
    res.status(201).location('localhost:8080/widgets/' + (newId)).send(
        widgets.get(newId)
    )
})

app.listen(8080, () => {
    console.log(`API up at: http://localhost:8080`)
})