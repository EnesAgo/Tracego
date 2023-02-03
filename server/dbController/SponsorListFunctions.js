const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

const { SponsorList, UserList, NotificationList, LikeList } = require("./TableSchemaCrontroller")
const { Op } = require("sequelize");


async function createSponsor(data) {
    try{

        const PostUUIDString = uuidv4();

        const SponsorData = {
            PostUUID: PostUUIDString,
            CompanySentUsername: data.CompanySentUsername,
            CompanySentUserImage: data.CompanySentUserImage,
            Title: data.Title,
            PostImage: data.PostImage,
        }

      const Sponsor = await SponsorList.create(SponsorData)

      console.log(Sponsor)

      const dataSponsor = {
        PostUUID: Sponsor.PostUUIDString,
        CompanySentUsername: Sponsor.CompanySentUsername,
        CompanySentUserImage: data.CompanySentUserImage,
        Title: Sponsor.Title,
        PostImage: Sponsor.PostImage,
      }
      

      return dataSponsor
      
    }
    catch(e){
        console.log(`error: ${e}`)
        return e;
    }
}

async function getSponsor() {
  try{


    const Sponsors = await SponsorList.findAll({});


    return Sponsors

  }catch(e){
    return e;
  }
}

async function getOneSponsor(postUUID){
  try{


    const Sponsor = await SponsorList.findOne({where: 
      {
        PostUUID: postUUID
      }
    });

    return Sponsor;

  }
  catch(e){
    return {error: e}
  }
}



module.exports = {
    createSponsor: createSponsor,
    getSponsor: getSponsor,
    getOneSponsor: getOneSponsor,
  };