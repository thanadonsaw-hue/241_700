const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8000;

let users = [];
let counter = 1;
/**
 GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
 POST /user - เพิ่มผู้ใช้ใหม่
 GET /user/:id - ดึงข้อมูลผู้ใช้ตาม id
 PUT /user/:id - แก้ไขข้อมูลผู้ใช้ตาม id ตาม id ที่่บันทึก
 DELETE /user/:id - ลบผู้ใช้ตาม id ที่บันทึก
*/



//path: = GET /users
app.get('/users', (req, res) => {
    res.json(users);
});

//path: = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json;({
    message: "User data received successfully",
    user: user
    });
});

// path: PUT /user/:id
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updateUser = req.body;

    // หา user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);
    
    // อัปเดตข้อมูล users
    if (updateUser.firstname) {
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname) {
        users[selectedIndex].lastname = updateUser.lastname;
    }
    
    res.json({
        message: "User data updated successfully",
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    // ส่ง user ที่อัปเดตแล้วกลับไป
});

app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    // หา index จาก id ที่ส่งมา
      let selectedIndex = users.findIndex(user => user.id == id);
    
    // ลบ user ออกจาก users
    users.splice(selectedIndex, 1);
    
    res.json({
        message: "User data deleted successfully",
        indexDelete: selectedIndex
    });

})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});