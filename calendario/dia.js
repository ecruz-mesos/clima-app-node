const axios = require('axios')
    // Recibe como fecha  formato YYYY-MM-DD
const esDiaFeriado = async(fecha) => {
    const parametro = (fecha.toISOString().slice(0, 10)).replace(/-/g, '/')
    const encodedUrl = encodeURI(parametro)
    const instance = axios.create({
        baseURL: `https://apis.digital.gob.cl/fl/feriados/${parametro}`,
        headers: {},
        timeout: 20000
    })
    const resp = await instance.get()
    if (resp.data.length == 0 || resp.data.error) {
        return false
    }
    const dataApi = resp.data
    if (dataApi.error) {
        return false
    }
    for (elemento of dataApi) {
        if (elemento.tipo) {
            return true
        }
        break
    }
    return false
}

const nombreDiaSemana = (fecha) => {
    //const diasSemana = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const weekday = new Array(7)
    weekday[0] = "Sunday"
    weekday[1] = "Monday"
    weekday[2] = "Tuesday"
    weekday[3] = "Wednesday"
    weekday[4] = "Thursday"
    weekday[5] = "Friday"
    weekday[6] = "Saturday"

    return weekday[fecha.getDay()]

}


module.exports = {
    esDiaFeriado,
    nombreDiaSemana
}