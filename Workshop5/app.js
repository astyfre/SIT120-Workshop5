const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

const db = new sqlite3.Database('data.db')

db.serialize(() =>{
    db.run('CREATE TABLE IF NOT EXISTs users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)');

});

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/add-user', (req, res) => {
    const {name,email} = req.body;
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) =>{
        if(err){
            console.error(err);
            res.sendStatus(500);
        }else {
            res.redirect('/');
    }
    });
});

app.get('/get-users', (req, res) =>{
    db.all('SELECT * FROM users', (err,rows) => {
        if(err){
            console.error(err);
            res.sendStatus(500);
        }else {
            res.send(rows);
    }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
