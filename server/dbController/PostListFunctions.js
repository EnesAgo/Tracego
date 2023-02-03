const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

const { StoryList, UserList, NotificationList, LikeList } = require("./TableSchemaCrontroller")
const { Op } = require("sequelize");


async function createStory(data) {
    try{

        const PostUUIDString = uuidv4();
        const CommentUUIDString = uuidv4();

        const StoryData = {
            PostUUID: PostUUIDString,
            CommentUUID: CommentUUIDString,
            userSentUUID: data.userSentUUID,
            userSentUsername: data.userSentUsername,
            userSentUserImage: data.userSentUserImage,
            Title: data.Title,
            Likes: 0,
            PostImage: data.PostImage,
            lat: data.lat,
            lon: data.lon,
        }

      const Story = await StoryList.create(StoryData)

      console.log(Story)

      const dataStory = {
        PostUUID: Story.PostUUIDString,
        CommentUUID: Story.CommentUUIDString,
        userSentUUID: Story.userSentUUID,
        userSentUsername: Story.userSentUsername,
        userSentUserImage: data.userSentUserImage,
        Title: Story.Title,
        Likes: Story.likes,
        PostImage: Story.PostImage,
        lat: Story.lat,
        lon: Story.lon,
      }
      

      return dataStory
      
    }
    catch(e){
        console.log(`error: ${e}`)
        return e;
    }
}

async function getStorys(page) {
  try{



    // define limit per page
    const limit = 15;
    const offset = (page - 1) * limit;

    const Storys = await StoryList.findAll({
      offset: offset,
      limit: limit
    });



    return Storys

  }catch(e){
    return e;
  }
}

async function getUserStorys(userSentUUID, page) {
  try{



    // define limit per page
    const limit = 15;
    const offset = (page - 1) * limit;

    const Storys = await StoryList.findAll({
      where: {userSentUUID: userSentUUID},
      offset: offset,
      limit: limit
    });



    return Storys

  }catch(e){
    return e;
  }
}

async function getPlaceStorys(place, page) {
  try{



    // define limit per page
    const limit = 15;
    const offset = (page - 1) * limit;

    const Storys = await StoryList.findAll({
      where: {Title: place},
      offset: offset,
      limit: limit
    });



    return Storys

  }catch(e){
    return e;
  }
}

async function getOneStory(postUUID){
  try{


    const Storys = await StoryList.findOne({where: 
      {
        PostUUID: postUUID
      }
    });

    return Storys;

  }
  catch(e){
    return {error: e}
  }
}

async function likeStory(userUUID, postUUID) {
  try{

    const story = await StoryList.findOne({
      where: {
        PostUUID: postUUID
      }
    })

    const user = await UserList.findOne({
      where: {
        uuID: userUUID
      }
    })

    const storyLikes = story.Likes;

    const updatedLikes = storyLikes+1;

    await StoryList.update(
      {
        Likes: updatedLikes
      },
      {
        where: { PostUUID: postUUID }
      }
    )

    const hasDbRow = await LikeList.findOne({
      where: {
        [Op.and]: [
          {PostUUID: postUUID }, 
          {userSentUUID: userUUID }
        ],
      }
    })

    // console.log(hasDbRow)

    if(!hasDbRow || hasDbRow == null || hasDbRow == undefined){
      const LikeRow = await LikeList.create({
        PostUUID: postUUID,
        userSentUUID: userUUID,
        isLiked: true
      })

      console.log(LikeRow)

    } else{ 

      const isLiked = hasDbRow.isLiked;
      console.log(isLiked)

      const changed = await LikeList.update(
        {
          isLiked: true
        },
        {
          where: { 
            [Op.and]: [
              {PostUUID: postUUID }, 
              {userSentUUID: userUUID }
            ],
           }
        }
        )
  
        console.log(changed)

    }


    const notifications = await NotificationList.create({


      PostUUID: postUUID,
      userRecieveUUID: story.userSentUUID,
      userSentUUID: user.uuID,
      userSentLogo: user.UserImage,
      userSentUsername: user.username,
      Title: `${user.username} liked your story`,
  

    })

    // console.log(notifications)

    const hasDbRowReturn = await LikeList.findOne({
      where: {
        [Op.and]: [
          {PostUUID: postUUID }, 
          {userSentUUID: userUUID }
        ],
      }
    })

    return ({notifications, updatedLikes, hasDbRowReturn})

  }catch(e){
    return e;
  }
}

async function unlikeStory(postUUID, userUUID) {
  try{

    const story = await StoryList.findOne({
      where: {
        PostUUID: postUUID
      }
    })

    const storyLikes = story.Likes;

    if(storyLikes <= 0){
      return false
    }

    const updatedLikes = storyLikes-1;

    const updatedStory = await StoryList.update(
      {
        Likes: updatedLikes
      },
      {
        where: { PostUUID: postUUID }
      }
    )

    console.log(updatedStory)

    try{

      const hasDbRow = await LikeList.findOne({
        where: {
          [Op.and]: [
            {PostUUID: postUUID }, 
            {userSentUUID: userUUID }
          ],
        }
      })

      console.log(hasDbRow)

      const changed = await LikeList.update(
        {
          isLiked: false
        },
        {
          where: { 
            [Op.and]: [
              {PostUUID: postUUID }, 
              {userSentUUID: userUUID }
            ],
           }
        }
        )
  
        console.log(changed)
    }
    catch(e){
      console.log(`error: ${e}`)
    }


      const hasDbRowReturn = await LikeList.findOne({
        where: {
          [Op.and]: [
            {PostUUID: postUUID }, 
            {userSentUUID: userUUID }
          ],
        }
      })
    


    return {updatedLikes, hasDbRowReturn}

  }catch(e){
    console.log(`errorInCode: ${e}`)
    return e;
  }
}

async function getLikes(userUUID, postUUID) {
  try{

    

    const hasDbRow = await LikeList.findOne({
      where: {
        [Op.and]: [
          {PostUUID: postUUID }, 
          {userSentUUID: userUUID }
        ],
      }
    })

    // console.log(hasDbRow)

    if(!hasDbRow || hasDbRow == null || hasDbRow == undefined){

      return ({
        "PostUUID": postUUID,
        "userSentUUID": userUUID,
        "isLiked": false
    })

    } else{ 

      return hasDbRow

    }



  }catch(e){
    return e;
  }
}

async function getNotifications(userUUID) {
  try{

    const Notification = await NotificationList.findAll({
      where: {
        userRecieveUUID: userUUID
      }
    })

    console.log(Notification)

    return Notification

  }catch(e){
    return e;
  }
}


module.exports = {
    createStory: createStory,
    getStorys: getStorys,
    getUserStorys: getUserStorys,
    getPlaceStorys: getPlaceStorys,
    getOneStory: getOneStory,
    likeStory: likeStory,
    unlikeStory: unlikeStory,
    getLikes: getLikes,
    getNotifications: getNotifications,
  };