const express = require("express");
const mySql = require("mysql");
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const verify = require('./verify/verifyToken');
const { UserList, Maillist, ReserveLists } = require("./dbController/TableSchemaCrontroller");

const { createUser, loginUser, getAllUsers, changeUserPassword } = require("./dbController/UserListFunctions");


const upload = multer({ dest: 'posts_images/' })

//init express server
const app = express()
app.use(express.json());

//limit the api call
app.use(express.json({limit: '50mb'}));

//enable cors
app.use(cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }))

app.use('/posts_images', express.static(__dirname + "/posts_images"));
app.use('/badges', express.static(__dirname + "/badges"));

//------------------------
//post requests
app.post("/createuser", async (req,res) => {
    const uuidString = uuidv4()

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isAdmin: false,
        uuID: uuidString,
    }

    const valid = await createUser(data);

      console.log(valid)

      res.send(valid)
})

app.post("/login", async (req,res) => {

    console.log("hi")

    const loginToken = await loginUser({
        username: req.body.username,
        password: req.body.password
    })

    res.header('authorization', loginToken).send(loginToken)
})

app.post("/createmail", async (req, res) => {
    try{
        const uuidString = uuidv4()

        const mailData = {
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            text: req.body.text,
            uuID: uuidString,
        }
    
        const mail = await Maillist.create(mailData)
    
    
        res.json(mail)
    }
    catch(e) {
        res.json({error: e})
    }

})

app.post("/createreserve", async (req, res) => {
    try{

        const mailData = {
            fullName: req.body.fullName,
            email: req.body.email,
            checkin: req.body.checkin,
            checkout: req.body.checkout,
            rooms: req.body.rooms,
            adults: req.body.adults,
            children: req.body.children
        }
    

        const reserve = await ReserveLists.create(mailData)
    
    
        res.json(reserve)
    }
    catch(e) {
        res.json({error: e})
    }

})

//------------------------
//get requests
app.get("/getAllUsers", async (req, res) => {
    res.json(await getAllUsers())
})

app.get("/getProfile", async (req, res) => {
    try{
        const user = await UserList.findOne({where: {
            uuID: req.query.uuID
        }})

        const dataUser = {
            username: user.username,
            isAdmin: user.isAdmin,
            email: user.email,
            uuID: user.uuID
          }


    res.json(dataUser)
    }
    catch(e){
        console.log(`error: ${e}`)
        res.json({error: e})

    }
})

app.get("/getAllMails", async (req, res) => {
    try{
        const allMails = await Maillist.findAll()
        res.json(allMails)
    }
    catch(e){
        res.json({error: e})
    }
})


//------------------------
//put requests

app.put("/changePassword", verify, async (req,res) => {

    // console.log(req.query.uuID)
    // console.log(req.body.oldPassword)
    // console.log(req.body.newPassword)
   
    const data = await changeUserPassword(req.query.uuID, req.body.oldPassword, req.body.newPassword);


    // console.log(data)
    res.json(data)
})




app.listen(process.env.PORT || '3001', () => {
    console.log(`connected to localhost: ${process.env.PORT || '3001'}`)
})