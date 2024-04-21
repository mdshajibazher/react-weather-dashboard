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

            }
        }catch (e)  {

        } finally () {
            setLoading({
                ...loading,
                state: false,
                message: ''
            })
        }
    }
}
export default useWeather();