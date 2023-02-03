const { Sequelize } = require("sequelize");
const { v4: uuidv4 } = require('uuid');

const { MapPlacesList } = require("./TableSchemaCrontroller")
const { Op } = require("sequelize");


async function createPlace(data) {
  
    try{
  
      const PlaceUUIDString = uuidv4();
  
      const PlaceData = {
          PlaceUUID: PlaceUUIDString,
          PlaceName: data.PlaceName,
          lat: data.lat,
          lon: data.lon,
          Range: data.Range,
          latTwo: data.latTwo,
          lonTwo: data.lonTwo,
          Lvl: data.Lvl,
          Badge: data.Badge
          
      }
  
    const Place = await MapPlacesList.create(PlaceData)
    
    
    console.log(Place)

  
    return Place
    
  }
  catch(e){
      console.log(`error: ${e}`)
      return e;
  }
  
}
  
async function getPlaces() {
try{

    const Places = await MapPlacesList.findAll({});

    return Places

}catch(e){
    console.log(e)
    return {error: e};
}
}

async function deletePlace(PlaceUUID) {

try{

    const place = MapPlacesList.destroy({where: {
        PlaceUUID: PlaceUUID
    }})

    console.log(place)

    return true

} catch(e){
    console.log(e)
}

}

  
module.exports = {
    createPlace: createPlace,
    getPlaces: getPlaces,
    deletePlace: deletePlace
};