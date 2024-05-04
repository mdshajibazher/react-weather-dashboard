import './App.css'
import Header from "./components/Header.tsx";
import WeatherBoard from "./components/weather/WeatherBoard.tsx";
import {WeatherProvider} from "./provider";

function App() {

    return (
        <WeatherProvider>
        <div className="grid place-items-center h-screen">
            <Header/>
            <main>
                <section className="">
                    <WeatherBoard/>
                </section>
            </main>
        </div>
    </WeatherProvider>
    )
}

export default App
