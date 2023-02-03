const express = require("express");
const mySql = require("mysql");
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const verify = require('./verify/verifyToken');
const { UserList, StoryList, CommentList, BadgeList, FollowPlacesList, SponsorList } = require("./dbController/TableSchemaCrontroller");

const { createUser, loginUser, getAllUsers, searchBar, changeUsaerImage, changeUserPassword, changeUserLevel, changeUserBio } = require("./dbController/UserListFunctions");
const { createStory, getStorys, likeStory, unlikeStory, getNotifications, getOneStory, getUserStorys, getLikes, getPlaceStorys } = require("./dbController/PostListFunctions");
const { createSponsor, getSponsor, getOneSponsor } = require("./dbController/SponsorListFunctions");
const { createComment, getComments, deleteComment } = require("./dbController/CommentListFunctions");
const { getPlaces, createPlace } = require("./dbController/MapListFunctions");

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
    const valid = await createUser({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        isAdmin: false,
        uuID: uuidString,
        UserImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
      });

      console.log(valid)

      res.send(valid)
})

app.post("/login", async (req,res) => {

    const loginToken = await loginUser({
        username: req.body.username,
        password: req.body.password
    })

    res.header('authorization', loginToken).send(loginToken)
})

app.post("/createStory", verify, async (req, res) => {

     console.log("this is it"+ req.body.PostImage)


    const story = await createStory({
        userSentUUID: req.body.userSentUUID,
        userSentUsername: req.body.userSentUsername,
        userSentUserImage: req.body.userSentUserImage,
        Title: req.body.Title,
        PostImage: `http://localhost:3001/${req.body.PostImage}`,
        lat: req.body.lat,
        lon: req.body.lon,
    })
    
    res.json(story)
})

app.post("/uploadFile", upload.single('image'), async (req, res) => {

    try{

        const uuidOne = uuidv4()
        const uuidTwo = uuidv4()

        const finalName = `posts_images/${uuidOne}-${uuidTwo}.png`
    
        console.log(req.file)
        fs.renameSync(`posts_images/${req.file.filename}`, finalName);
        
    
        res.json({finalName: finalName})

    }
    catch(e){
        res.json({error: e})
    }
        
})

app.post("/createComment", verify, async (req, res) => {

    // console.log(req.body)

    const comment = await createComment({
        PostUUID: req.body.PostUUID,
        userSentUUID: req.body.userSentUUID,
        userSentUsername: req.body.userSentUsername,
        userSentUserImage: req.body.userSentUserImage,
        Title: req.body.Title,
    })

    const returnObj = {
        PostUUID: comment.PostUUID,
        CommentUUID: comment.CommentUUID,
        userSentUUID: comment.userSentUUID,
        userSentUsername: comment.userSentUsername,
        userSentUserImage: comment.userSentUserImage,
        Title: comment.Title,
    }

    console.log(returnObj)

    res.json(returnObj)
})

app.post("/createPlace", async (req, res) => {

    // console.log(req.body)

    const place = await createPlace({
        PlaceName: req.body.PlaceName,
        lat: req.body.lat,
        lon: req.body.lon,
        Range: req.body.Range,
        latTwo: req.body.latTwo,
        lonTwo: req.body.lonTwo,
        Lvl: parseInt(req.body.Lvl),
        Badge: req.body.Badge
    })

    const returnObj = {
        PlaceName: place.PlaceName,
        lat: place.lat,
        lon: place.lon,
        Range: place.Range,
        latTwo: place.latTwo,
        lonTwo: place.lonTwo,
        Lvl: parseInt(place.Lvl),
        Badge: place.Badge
    }

    console.log(returnObj)

    res.json(returnObj)
})

app.post("/createBadge", verify, async (req, res) => {

    const isBadge = await BadgeList.findAll({ 
        where: {
            userUUID: req.body.userUUID,
            Badge: req.body.Badge
        }
    })

    console.log(isBadge)

    if(isBadge.length == 0){
        const newBadge = await BadgeList.create({
            userUUID: req.body.userUUID,
            Badge: req.body.Badge
        })
    
        console.log(isBadge)
    
        res.json(newBadge)
    }
    else{
        res.json({error: "badge already in use"})
    }



})

app.post("/createFollowPlace", verify, async (req, res) => {

    const isFollowed = await FollowPlacesList.findAll({ 
        where: {
            userUUID: req.body.userUUID,
            PlaceUUID: req.body.PlaceUUID
        }
    })

    console.log(isFollowed)

    if(isFollowed.length == 0){
        const newFollowingPlace = await FollowPlacesList.create({
            userUUID: req.body.userUUID,
            PlaceUUID: req.body.PlaceUUID
        })
    
        console.log(isFollowed)
    
        res.json(newFollowingPlace)
    }
    else{
        res.json({error: "Place already followed"})
    }



})

app.post("/createSponsor", verify, async (req, res) => {

    console.log("this is it"+ req.body.PostImage)


   const story = await createSponsor({
       CompanySentUsername: req.body.CompanySentUsername,
       CompanySentUserImage: req.body.CompanySentUserImage,
       Title: req.body.Title,
       PostImage: `http://localhost:3001/${req.body.PostImage}`,
   })
   
   res.json(story)
})


//------------------------
//get requests
app.get("/getAllUsers", async (req, res) => {
    res.json(await getAllUsers())
})

app.get("/search", async (req, res) => {

    const text = String(req.query.text);
    
    const users = await searchBar(text)

    const validData = users.map(e => ({
        username: e.username,
        email: e.email,
        UserImage: e.UserImage,
        uuID: e.uuID,
    }))

    res.json(validData)
})

app.get("/getProfile", verify, async (req, res) => {
    try{
        const user = await UserList.findOne({where: {
            uuID: req.query.uuID
        }})

        const dataUser = {
            username: user.username,
            nickname: user.nickname,
            isAdmin: user.isAdmin,
            email: user.email,
            UserImage: user.UserImage,
            userLevel: user.userLevel,
            bio: user.bio,
            uuID: user.uuID
          }


    res.json(dataUser)
    }
    catch(e){
        console.log(`error: ${e}`)
        res.json({error: e})

    }
})

app.get("/getStorys", verify, async (req, res) => {
    let page;

    if(req.query.page){
        page = parseInt(req.query.page);
    }
    else{
        page = 1;
    }

    const allStorys = await getStorys(page);
    const total = await StoryList.count()

  

    res.json({total, allStorys, page})

})

app.get("/getUserStorys", verify, async (req, res) => {

    const userSentUUID = req.query.userSentUUID;

    let page;

    if(req.query.page){
        page = parseInt(req.query.page);
    }
    else{
        page = 1;
    }
    const allStorys = await getUserStorys(userSentUUID, page);
    const total = await StoryList.count({where: {userSentUUID: userSentUUID}})

  

    res.json({total, allStorys, page})

})

app.get("/getPlaceStorys", verify, async (req, res) => {

    const place = req.query.place;

    let page;

    if(req.query.page){
        page = parseInt(req.query.page);
    }
    else{
        page = 1;
    }
    const allStorys = await getPlaceStorys(place, page);
    const total = await StoryList.count({where: {Title: place}})

  

    res.json({total, allStorys, page})

})

app.get("/getOneStory", verify, async (req, res) => {
    try{
        const story = await getOneStory(req.body.postUUID)

        res.json(story)
    } catch(e){
        res.json(`error: ${e}`)
    }
})

app.get("/notifications", verify, async (req,res) => {

    const Notification = await getNotifications(req.query.uuID)

    res.json(Notification)

})

app.get("/getLike", verify, async (req, res) => {
    try{

        res.json(await getLikes(req.query.userUUID, req.query.postUUID))

    }catch(e){
        res.json({error: e})
    }
})

app.get("/getComments", verify, async (req, res) => {
    const PostUUID = req.query.PostUUID;
    let page;

    if(req.query.page){
        page = parseInt(req.query.page);
    }
    else{
        page = 1;
    }

    try{
        const allComments = await getComments(PostUUID, page);
        const total = await CommentList.count({where: {PostUUID: PostUUID}})
    
      
        res.json({ total, allComments, page })
    }
    catch(e){
        console.log(e)
        res.json({error: e})
    }

})

app.get("/getPlaces", async (req, res) => {
    try{
        
        const places = await getPlaces()

        res.json(places)

    }catch(e){
        res.json(`error: ${e}`)
    }
})

app.get("/getBadges", verify, async (req, res) => {
    try{
        const badges = await BadgeList.findAll({ 
            where: {
                userUUID: req.query.userUUID,
                Badge: req.query.Badge
            }
        })
    
        res.json(badges)
    } catch(e){
        res.json({error: e})
    }
})

app.get("/getAllUserBadges", verify, async (req, res) => {
    try{
        const badges = await BadgeList.findAll({ 
            where: {
                userUUID: req.query.userUUID            }
        })
    
        res.json(badges)
    } catch(e){
        res.json({error: e})
    }
})

app.get("/getFollowedPlaces", verify, async (req, res) => {
    try{
        const followingPlaces = await FollowPlacesList.findAll({ 
            where: {
                userUUID: req.query.userUUID,
            }
        })
    
        res.json(followingPlaces)
    } catch(e){
        res.json({error: e})
    }
})

app.get("/getSponsors", verify, async (req, res) => {

    const allSponsors = await getSponsor();
    const total = await SponsorList.count()


    res.json({total, allSponsors})

})

app.get("/getOneSponsor", verify, async (req, res) => {
    try{
        const sponsor = await getOneSponsor(req.body.postUUID)

        res.json(sponsor)
    } catch(e){
        res.json(`error: ${e}`)
    }
})


//------------------------
//put requests
app.put("/changeUserImage", upload.single('image'), verify, async (req, res) => {

    try{

        const uuidOne = uuidv4()
        const uuidTwo = uuidv4()

        const finalName = `posts_images/${uuidOne}-${uuidTwo}.png`
    
        console.log(req.file)
        fs.renameSync(`posts_images/${req.file.filename}`, finalName);
        

    const data = await changeUsaerImage(req.query.uuID, `http://localhost:3001/${finalName}`, req.headers['authorization'].split(' ')[1]);

    console.log(data.UserImage)

    res.json(data)
    }
    catch(e){
        res.json({error: e})
    }
})

app.put("/changePassword", verify, async (req,res) => {

    // console.log(req.query.uuID)
    // console.log(req.body.oldPassword)
    // console.log(req.body.newPassword)
   
    const data = await changeUserPassword(req.query.uuID, req.body.oldPassword, req.body.newPassword);


    // console.log(data)
    res.json(data)
})

app.put("/changeUserLevel", verify, async (req, res) => {

    try{

        const user = await UserList.findOne({where: {
            uuID: req.query.uuID
          }})
      
        const startingLevels = parseInt(user.userLevel)

        const finalLevels = parseInt(startingLevels) + parseInt(req.query.additionalLevels)

   
        const data = await changeUserLevel(req.query.uuID, parseInt(finalLevels));

        // console.log(data)
        res.json(data)


    }
    catch(e){
        res.json({error: e})
    }
})

app.put("/changeUserBio", verify, async (req, res) => {

    try{

        const user = await UserList.findOne({where: {
            uuID: req.query.uuID
          }})
      
   
        const data = await changeUserBio(req.query.uuID, req.body.newBio, req.headers['authorization'].split(' ')[1]);

        // console.log(data)
        res.json(data)


    }
    catch(e){
        res.json({error: e})
    }
})

app.put("/likePost", verify, async (req, res) => {
    const data = await likeStory(req.query.userUUID, req.body.postUUID);

    res.json(data)
    
})

app.put("/unlikePost", verify, async (req, res) => {
    try{
        const data = await unlikeStory(req.body.postUUID, req.query.userUUID);
        res.json(data)
    } catch(e){
        console.log(`querys: ${req.query.userUUID}`);
        console.log(`error: ${e}`);
        res.json(`error: ${e}, querys: ${req.query.userUUID}`)
    }

})


//------------------------
//delete requests
app.delete("/deleteCOmment", verify, async (req, res) => {

    const deletedComment = await deleteComment(req.query.CommentUUID);

    res.json(deletedComment)
})

app.delete("/deleteFollowingPlace", verify, async (req, res) => {

    const isFollowed = await FollowPlacesList.findAll({ 
        where: {
            userUUID: req.body.userUUID,
            PlaceUUID: req.body.PlaceUUID
        }
    })

    console.log(isFollowed)

    if(isFollowed.length != 0){

        const deletedFollowingPlace = await FollowPlacesList.destroy({
            where: {
                userUUID: req.body.userUUID,
                PlaceUUID: req.body.PlaceUUID
            }
        })
    
        res.json(true)
    }
    else{
        res.json({error: "no place found in that name"})
    }

})




app.listen(process.env.PORT || '3001', () => {
    console.log(`connected to localhost: ${process.env.PORT || '3001'}`)
})