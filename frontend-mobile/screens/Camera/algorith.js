function arePointsNear(position, centerPoint, radiusKm) {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - position.lng) * kx;
    var dy = Math.abs(centerPoint.lat - position.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= radiusKm;
}

export default arePointsNear;

// var ohrid = {lat: 41.11722, lng: 20.80194};
// var randPlace = {lat: 41.121934, lng: 20.795547}


// var n = arePointsNear(randPlace, ohrid, 10);

// console.log(n);
