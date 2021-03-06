const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');

const Todo = require('./todo');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS");
  next();
})

app.use(express.static('public'));

router.get('/', (req, res) => res.send('Hello World!'));

router.route('/todos')
    .get((req, res) => {
        Todo.all(function(data){
          console.log('Retreiving all Todos')
          res.json(data)
        })
    })
    .post((req, res) => {
      Todo.createDocument(req.body, function(data){
        console.log(`Todo created with id ${data._id}`)
        res.json(data)
      })
    })

router.route('/todos/:todo_id')
  .put((req, res) => {
    Todo.updateDocument(req.params.todo_id, req.body, function(data){
      console.log(`Todo id ${data._id} updated!`)
      res.json(data)
    })
  })
  
app.use(bodyParser.json());

app.use('/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`));
