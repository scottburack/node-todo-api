const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const Todo = require('./todo');

router.get('/', (req, res) => res.send('Hello World!'));

router.route('/todos')
    .get((req, res) => {
        res.json([
            {
            "_id": "a",
            "text": "Item 1",
            "done": false
            },
            {
            "_id": "b",
            "text": "Item 2",
            "done": false
            }
        ])
    })

app.use('/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`));
