const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

const { CommentList, NotificationList } = require("./TableSchemaCrontroller")
const { Op } = require("sequelize");


async function createComment(data) {
  
    try{
  
      const CommentUUIDString = uuidv4();
  
      const CommentData = {
          PostUUID: data.PostUUID,
          CommentUUID: CommentUUIDString,
          userSentUUID: data.userSentUUID,
          userSentUsername: data.userSentUsername,
          userSentUserImage: data.userSentUserImage,
          Title: data.Title,
      }
  
    const Comment = await CommentList.create(CommentData)
    
    const dataComment = {
      PostUUID: Comment.PostUUID,
      CommentUUID: Comment.CommentUUID,
      userSentUUID: Comment.userSentUUID,
      userSentUsername: Comment.userSentUsername,
      userSentUserImage: Comment.userSentUserImage,
      Title: Comment.Title,
    }
    
    console.log(dataComment)

    // const notifications = await NotificationList.create({


    //     PostUUID: Comment.PostUUID,
    //     userRecieveUUID: story.userSentUUID,
    //     userSentUUID: user.uuID,
    //     userSentLogo: user.UserImage,
    //     userSentUsername: user.username,
    //     Title: `${user.username} liked your story`,
    
  
    //   })
  
    //   console.log(notifications)

  
    return dataComment
    
  }
  catch(e){
      console.log(`error: ${e}`)
      return e;
  }
  
}
  
async function getComments(PostUUID, page) {
try{


    // define limit per page
    const limit = 15;
    const offset = (page - 1) * limit;

    const Comments = await CommentList.findAll({
        offset: offset,
        limit: limit,
        where: { PostUUID: PostUUID },
    });



    return Comments

}catch(e){
    console.log(e)
    return {error: e};
}
}

async function deleteComment(CommentUUID) {

try{

    const comment = CommentList.destroy({where: {
    CommentUUID: CommentUUID
    }})

    console.log(comment)

    return true

} catch(e){
    console.log(e)
}

}

  
module.exports = {
    createComment: createComment,
    getComments: getComments,
    deleteComment: deleteComment
};