
import cloudImage from '../../assets/cloud.svg'
import pinImage from '../../assets/pin.svg'
import {useWeather} from "../../hooks";
import {getFormattedDate} from "../../utils/date-utils.ts";
function WeatherSummery() {
    const {weatherData} = useWeather();
    const {temperature,name,time} = weatherData;
    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={cloudImage} alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{temperature}°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={pinImage} />
                        <h2 className="text-2xl lg:text-[50px]">{name}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{getFormattedDate(time,'time',false)} - {getFormattedDate(time,'date',false)}</p>
        </div>
    );
}

export default WeatherSummery;