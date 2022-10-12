import request from "request"




export const geocode = (adress, callBack) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=704b966a04f264b901a7d908cd8d88e4&query=' + adress

    request({url : url, json : true}, (error, response) =>{
        callBack(undefined, {
            latitude : response.body.data[0].latitude,
            longitude : response.body.data[0].longitude,
            location : response.body.data[0].name
        })
        
    }
    )
}


