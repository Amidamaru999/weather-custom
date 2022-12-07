import axios from "axios";


export const getCities = async (city) => {
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {q: `${city}`, appid: '908a3d8b70fa7c49d858759050a943c1', units: 'metric'},
        // headers: {
        //   'X-RapidAPI-Key': '7908a3d8b70fa7c49d858759050a943c1',
        //   'X-RapidAPI-Host': 'api.openweathermap.org'
        // }
      };
    let request = await axios.request(options)
    console.log(request)
    return request.data
}
