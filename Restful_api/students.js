var express = require('express')
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())
var students = new Map()
students.set(1,{name:"test",age:50,room:"aaaa123"})
students.set(2,{name:"test",age:15,room:"aann246"})
students.set(3,{name:"test",age:17,room:"bbbb123"})


function AllStudents(){
    var str = ""
    for (var [key, element] of students) {
        str += `<a href="/students/${key}">Student ${element.name}, Room: ${element.room}</a><br>`
    }
    return str
}

app.get('/',(req,res)=>{
    return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Widgets</title>
</head>
<body>
    <a href="/widgets">All Widgets</a><br>` + AllStudents() +
`</body>
</html>`)
})
app.get('/students',(req,res)=>{
    var list = []
    for (var [key,value] of students) {
        list.push({id:key,name:value.name,age:value.age,room:value.room})
    }
    return res.status(200).send(list)
})
app.get("/students/:id",(req,res)=>{
    var parsedId = parseInt(req.params.id)
    if(!parsedId){
        return res.status(400).send({error:"ID is not an integer!"})
    }
    var student = students.get(parsedId)
    if(!student){
        return res.status(400).send({error:`Student with id ${parsedId} was not found!`})
    }
    return res.send(student)
})
app.delete('/students/:id',(req,res)=>{
    var parsedId = parseInt(req.params.id)
    if(!parsedId){
        return res.status(400).send({error:"ID is not an integer!"})
    }
    if(!students.has(parsedId)){
        return res.status(400).send({error:`Student with id ${parsedId} was not found!`})
    }
    students.delete(parsedId)
    return res.status(204).send()
})
app.post('/students',(req,res)=>{
    if(!req.body){
        return res.status(400).send({error:"No JSON body found!"})
    }
    if(!req.body.name){
        return res.status(400).send({error:"No student name specified!"})
    }
    if(!req.body.age){
        return res.status(400).send({error:"No student age specified!"})
    }
    var age = parseInt(req.body.age)
    if(!age){
        return res.status(400).send({error:"Student age needs to be an integer"})
    }
    if(!req.body.room){
        return res.status(400).send({error:"No student room specified!"})
    }
    var id = Math.max(...students.keys()) + 1
    var studentObject = {
        name:req.body.name,
        age:age,
        room:req.body.room
    }
    students.set(id,studentObject)
    return res.status(201).location(`localhost:8080/students/${id}`).send(students.get(id))
})

app.get('/',(req,res)=>{
    return res.send()
})
app.listen(8080, ()=>{
    console.log("api up 8080")
})