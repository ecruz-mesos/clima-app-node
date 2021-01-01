//const { require } = require("yargs");
const evalDia = require('./calendario/dia')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion',
        demand: true
    }
}).argv

const bEnviarFecha = async(fecha) => {
    const resultado = await evalDia.esDiaFeriado(fecha)
    const diaSemana = evalDia.nombreDiaSemana(fecha)

    return `Día de la semana ${ diaSemana } a enviar mail ${ resultado }`

}


const fecha = new Date()
const res1 = bEnviarFecha(new Date((fecha.setDate(fecha.getDate() - 1))) /*fecha*/ )
    .then(console.log)
    .catch(console.log)

console.log(res1);

//const nuevaFecha = new Date((fecha.setDate(fecha.getDate() - 1)))
//console.log(nuevaFecha)

//console.log('Resultado=', resultado);