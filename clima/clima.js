const axios = require('axios');


//creamos funcion para imprimir los grados de la ciudad en funcion de su lingitud y su altitud
const getgrados = async(lon, lat) => {
    let vgrado = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

    return vgrado.data.main.temp;


}
module.exports = {
    getgrados
}