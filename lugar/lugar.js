const axios = require('axios');
//escaparlos a su forma htlm
// y transformarlo en urlfrenli

const getdatos = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAGHmMIQzB-gEwXf5XWJ3lMeeqhxIS28SY`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para la ciudad ${direccion}`)
    }
    //console.log(JSON.stringify(res.data, undefined, 2));
    let location = res.data.results[0];
    let coors = location.geometry.location;

    return {

        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng
    }





}
module.exports = {
    getdatos
}