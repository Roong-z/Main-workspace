const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1023',
    database: 'blockchain'
});

app.post('/isUser', (req, res) => {
    const id = req.body.id;
    db.query(
        'select * from user where id = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send('SQL ERROR');
            } else {
                if (result.length === 0) {
                    res.send({ isUser: false });
                } else {
                    res.send({ isUser: true, address: result[0].address });
                }
            };
        });
});

app.post('/register', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;

    db.query(
        'insert into user (id, name, address) values (?, ?, ?)',
        [id, name, address],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send('SQL ERROR');
            } else {
                if (result) {
                    res.send({ message: true });
                } else {
                    res.send({ message: false });
                }
            }
        });
});

app.post('/withdraw', (req, res) => {
    const id = req.body.id;
    db.query(
        'delete from user where id = ?',
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send('SQL ERROR');
            } else {
                if (result.length === 0) {
                    res.send({ message: false });
                } else {
                    res.send({ message: true });
                }
            }
        });
});

const port = 3001;
app.listen(port, () => {
    console.log(`running on port ${port}`)
});