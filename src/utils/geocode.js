const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGFuaWFyYyIsImEiOiJja2UxdTJ4NzQwMndxMnJueGJwcTMxMXZuIn0.OSiXaDIutXouBZtmnRkqeA&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.lenght === 0) {
            callback('Unable to find location. Try another search', undefined)

        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                placename: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode



// Geocoding
// const curl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoidGFuaWFyYyIsImEiOiJja2UxdTJ4NzQwMndxMnJueGJwcTMxMXZuIn0.OSiXaDIutXouBZtmnRkqeA&limit=1'
//     //se declararon variables dentro de la función flecha para ingresar a la matriz de datos consultada en la URL 
//     //Lo que se encuentra dentro de los corchetes es la posición del valor dentro de la matriz de datos
// request({ url: curl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Lost internet connection')
//     } else if (response.body.features.lenght === 0) {
//         console.log('Unable to find location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })