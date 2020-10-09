const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=ece1e62140983132ca171f8594b1d6cd&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unavailable internet connection')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.feelslike + " degress out")
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ece1e62140983132ca171f8594b1d6cd&query=1' + latitude + '.' + longitude + 'units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unavailable internet connection', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.feelslike + " degress out")

        }
    })
}

module.exports = forecast

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGFuaWFyYyIsImEiOiJja2UxdTJ4NzQwMndxMnJueGJwcTMxMXZuIn0.OSiXaDIutXouBZtmnRkqeA&limit=1'
//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services', undefined)
//         } else if (response.body.features.lenght === 0) {
//             callback('Unable to find location. Try another search', undefined)

//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 placename: response.body.features[0].place_name,
//             })
//         }
//     })
// }