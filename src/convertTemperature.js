
const kelvinToCelcius = (temperaturaKelvin)=>{
    const kelvin= 273.15;
    const celcius = Math.floor(temperaturaKelvin - kelvin);
    return celcius;
}

export default kelvinToCelcius;