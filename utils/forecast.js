import request from "request";



export const forecast =(latitude, longitude, callBack) => {
    const url = 'http://api.weatherstack.com/current?access_key=3c2d6ab633f360f533856fd242df5216&query=' + latitude + ',' + longitude



    request({ url : url, json : true  }, (error, response) => {
        callBack(undefined, {
            currentWeather : response.body.current.temperature,
            FeelsLike : response.body.current.feelslike
        })
})
}

