const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

const { UserList } = require("./TableSchemaCrontroller")
const { Op } = require("sequelize");


async function createUser(data) {
    try{

      //checkUserName
          const oldUserUsername = await UserList.findOne({where: {
            username: data.username
        }})

        if(oldUserUsername || oldUserUsername != null){
            return {error: 'username found'};
        }
      //checkUserEmail
          const oldUserEmail = await UserList.findOne({where: {
            email: data.email
        }})

        if(oldUserEmail || oldUserEmail != null){
            return {error: 'user email found'};
        }
      //checkUserPhone
        //   const oldUserPhone = await UserList.findOne({where: {
        //     email: data.email
        // }})

        // if(oldUserPhone || oldUserPhone != null){
        //     return {error: 'user phone found'};
        // }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)
        const uuIDString = uuidv4();

        const hashedData = {
            username: data.username,
            nickname: `@${data.username}`,
            email: data.email,
            // phone: data.phone,
            userLevel: 0,
            password: hashedPassword,
            isAdmin: data.isAdmin,
            uuID: uuIDString,
            bio: '',
            UserImage: data.UserImage
        }

      const user = await UserList.create(hashedData)

      const token = jwt.sign({uuID: data.uuID}, process.env.JWT_SECRET)

      const dataUser = {
        username: user.username,
        nickname: user.nickname,
        email: user.email,
        // phone: user.phone,
        userLevel: user.userLevel,
        isAdmin: user.isAdmin,
        uuID: user.uuID,
        UserImage: user.UserImage,
        bio: user.bio,
        token: token
      }
      

      return dataUser
      
    }
    catch(e){
        return e;
    }
}


async function loginUser(data) {
  try {
    const user = await UserList.findOne({where: {
        username: data.username
    }})

    if(!user || user == null){
        return {error: 'user not found'};
    }

    const validPass = await bcrypt.compare(data.password, user.password);
    if(!validPass) return {error: 'user password incorrect'}


    const token = jwt.sign({uuID: user.uuID}, process.env.JWT_SECRET)

    const dataUser = {
      username: user.username,
      nickname: user.nickname,
      isAdmin: user.isAdmin,
      email: user.email,
      // phone: user.phone,
      userLevel: user.userLevel,
      UserImage: user.UserImage,
      uuID: user.uuID,
      bio: user.bio,
      token: token
    }

    return dataUser;

  } catch (e) {
    return e;
  }
}

async function getAllUsers() {
  try{

    const users = await UserList.findAll();

    const dataUsers = users.map(e => {
      return {
        username: e.username,
        nickname: e.nickname,
        isAdmin: e.isAdmin,
        email: e.email,
        // phone: e.phone,
        userLevel: e.userLevel,
        UserImage: e.UserImage,
        uuID: e.uuID,
        bio: e.bio,
        token: e.token
      }
    })

    return dataUsers

  }catch(e){
    return e;
  }
}


async function searchBar(text) {
  const regex = new RegExp(`${text}`,"gi");
  try{
    const data = await UserList.findAll({
      where: {
        username: {
          [Op.substring]: text
        }
      }
    })
  console.log(data)
  return data

  }catch(e){
    console.log(`error: ${e}`)
    return `erro: ${e}`
  }


}



//user image

async function changeUsaerImage(uuID, image, token) {
  try{
      UserList.update(
          {UserImage: `${image}`},
          {where: {uuID: uuID}}
      )

      const user = await UserList.findOne({where: {
          uuID: uuID
      }})

      const dataUser = {
        username: user.username,
        nickname: user.nickname,
        isAdmin: user.isAdmin,
        email: user.email,
        // phone: user.phone,
        userLevel: user.userLevel,
        UserImage: user.UserImage,
        uuID: user.uuID,
        bio: user.bio,
        token: token
      }


  return dataUser;
  }
  catch(e){
    console.log(`error: ${e}`)
      return {error: e};
  }

}




//change user password
async function changeUserPassword(uuID, oldPass, newPass) {
  try{
    const user = await UserList.findOne({where: {
      uuID: uuID
    }})

    const validPass = await bcrypt.compare(oldPass, user.password);
    if(!validPass) return false;

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPass, salt)

    UserList.update(
      {password: `${hashedPassword}`},
      {where: {uuID: uuID}}
  )

  return true;
  }
  catch(e){
      return {error: e};
  }

}


//change user level
async function changeUserLevel(uuID, levels) {
  try{
    UserList.update(
      {userLevel: parseInt(levels)},
      {where: {uuID: uuID}}
  )

  return true;
  }
  catch(e){
      return {error: e};
  }

}


//change user bio
async function changeUserBio(uuID, newBio, token) {
  try{
    UserList.update(
      {bio: newBio},
      {where: {uuID: uuID}}
  )

  const user = await UserList.findOne({where: {
    uuID: uuID
  }})

  const dataUser = {
    username: user.username,
    nickname: user.nickname,
    isAdmin: user.isAdmin,
    email: user.email,
    // phone: user.phone,
    userLevel: user.userLevel,
    UserImage: user.UserImage,
    uuID: user.uuID,
    bio: newBio,
    token: token
  }

  return dataUser;
  }
  catch(e){
      return {error: e};
  }

}



module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  getAllUsers: getAllUsers,
  searchBar: searchBar,
  changeUsaerImage: changeUsaerImage,
  changeUserPassword: changeUserPassword,
  changeUserLevel: changeUserLevel,
  changeUserBio: changeUserBio
};