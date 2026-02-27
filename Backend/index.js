const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

app.use(bodyParser.json());

const port = 8000;

let conn = null;
const initMysql = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
}

//path: = GET /users สำหรับดึงข้อมูล users ทั้งหมด
app.get('/users', async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM users');
        res.json(result[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//path: = POST /users สำหรับเพิ่ม users ใหม่
app.post('/user', async (req, res) => {
    try {
        let user = req.body;
        const result = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            Message: 'User added successfully',
            data: result[0]
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Error adding user' });
    }
});

//path: = GET /users/:id สำหรับดึงข้อมูล user ตาม id
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const result = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (result[0].length === 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        res.json(result[0][0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
});

//path: = PUT /users/:id สำหรับแก้ไขข้อมูล user ตาม id
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;
        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        res.json({
            Message: 'User updated successfully',
            data: result[0]
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: error.message });
    }
});

//path: = DELETE /users/:id สำหรับลบ user ตาม id
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const result = await conn.query('DELETE FROM users WHERE id = ?', id);
        res.json({
            Message: 'User deleted successfully',
            data: result[0]
        });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/testdb2', async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM users');
        res.json(result[0]);
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.patch('/user/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;

        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);

        res.json({
            Message: 'User updated successfully',
            data: result[0]
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const result = await conn.query('DELETE FROM users WHERE id = ?', [id]);

        res.json({
            Message: 'User deleted successfully',
            data: result[0]
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, async () => {
    await initMysql();
    console.log(`Server is running on http://localhost:${port}`);
});

/**ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า server
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Hello, World! this is my first server.');
}

//run server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
let users = [];
let counter = 1;*/