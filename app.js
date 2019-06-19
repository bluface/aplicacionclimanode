const datos = require('./lugar/lugar');
const temperatura = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true


    },

}).argv;

/*datos.getdatos(argv.direccion)
    .then(res => {

    })
    .catch(e => console.log(e));*/
let getInfo = async(direccion) => {
    try {
        let cors = await datos.getdatos(direccion);
        let temp = await temperatura.getgrados(cors.lat, cors.lng)


        return `el clima en ${direccion} es de ${temp}`;
    } catch (e) {

        return `no se pudo determinar el clima en ${direccion}`;
    }


}


getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(e => console.log(e));