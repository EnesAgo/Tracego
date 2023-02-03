const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

console.log(process.env.SEQUELIZE_DB)

const sequelize = new Sequelize(process.env.SEQUELIZE_DB, process.env.SEQUELIZE_USER, process.env.SEQUELIZE_PASSWORD, {
    host: process.env.SEQUELIZE_HOST,
    dialect: "mysql",
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });


  
  const UserList = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // phone: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    userLevel: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    password: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
    },
    uuID: {
      type: DataTypes.STRING
    },
    UserImage: {
      type: DataTypes.TEXT('long')
    },
    bio: {
      type: DataTypes.TEXT('long')
    }
  });

  const StoryList = sequelize.define("Storys", {
    PostUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CommentUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUserImage: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    Likes: {
      type: DataTypes.BIGINT,
    },
    PostImage: {
      type: DataTypes.TEXT('long')
    },
    lat: {
      type: DataTypes.TEXT('long')
    },
    lon: {
      type: DataTypes.TEXT('long')
    },
  });

  const SponsorList = sequelize.define("Sponsors", {
    PostUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CompanySentUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CompanySentUserImage: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    PostImage: {
      type: DataTypes.TEXT('long')
    }
  });

  const NotificationList = sequelize.define("Notifications", {
    PostUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRecieveUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentLogo: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    userSentUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });

  const LikeList = sequelize.define("Likes", {
    PostUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });

  const CommentList = sequelize.define("Comments", {
    PostUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CommentUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUsername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSentUserImage: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
  });

  const MapPlacesList = sequelize.define("MapPlaces", {
    PlaceUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PlaceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Range: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latTwo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lonTwo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lvl: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    Badge: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
  });

  const BadgeList = sequelize.define("Badges", {
    userUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Badge: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    }
  });

  const FollowPlacesList = sequelize.define("FollowPlaces", {
    PlaceUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userUUID: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });


  sequelize
  .sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });


  module.exports = {
    UserList: UserList,
    StoryList: StoryList,
    SponsorList: SponsorList,
    NotificationList: NotificationList,
    LikeList: LikeList,
    CommentList: CommentList,
    MapPlacesList: MapPlacesList,
    BadgeList: BadgeList,
    FollowPlacesList: FollowPlacesList
  }