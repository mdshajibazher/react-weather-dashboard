import {useState} from "react";

const useWeather = () => {
    const [weatherData,setWeatherData] = useState({
        location: '',
        climate: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: '',
        humidity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        latitude: '',
        longitude: '',

    });

    const [loading,setLoading] = useState({
        state: false,
        message: 'loading...',
    });

    const [error, setError] = useState(null);
    const fetchWeatherData = async (lat,lng) => {
        try{
            setLoading({
                ...loading,
                state: true,
                message: 'Loading...'
            })

            const response = await  fetch(``)
            if(!response.ok){
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            const updatedWeatherData = {
                ...weatherData,
                name: data?.name,
                climate: '',
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: lng,
                latitude: lat,
            }
        }catch (e)  {
            console.log(e)
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ''
            })
        }
    }
}
export default useWeather();