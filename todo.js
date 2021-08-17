const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connectioon error:'));

db.once('open', function() {
    console.log('Connected to MongoDB!')
});

const todoSchema = new mongoose.Schema({
    text: String,
    done: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.export = Todo;