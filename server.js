const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://Kso-savage:Ortega@cluster0.f93jb.mongodb.net/todo-ortega?retryWrites=true&w=majority";
const dbName = "todo-ortega";

app.listen(5050, () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('todo-messages').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {tasks: result})
  })
})

app.post('/listContainer', (req, res) => {
  db.collection('todo-messages').insertOne({task: req.body.task, marked: false }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/checked', (req, res) => {
  db.collection('todo-messages')
  .findOneAndUpdate({task: req.body.task, marked: req.body.marked}, {
    $set: {
      marked: !req.body.marked
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
// erases with the erasse button in the LI
app.delete('/eraseOne', (req, res) => {
  db.collection('todo-messages').findOneAndDelete({task: req.body.task, marked: req.body.marked}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
// erases with the clear all button
app.delete('/eraseAll', (req, res) => {
  db.collection('todo-messages').deleteMany({})
  res.send('cleared')
})
// clears ones maked (red)
app.delete('/eraseMarked', (req, res) => {
    db.collection('todo-messages').deleteMany({marked: true}, (err, result) => {
      if (err) return res.send(500, err)
      res.send('Message deleted!')
    })

})
