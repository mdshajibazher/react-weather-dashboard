import './App.css'
import Header from "./components/Header.tsx";
import WeatherBoard from "./components/weather/WeatherBoard.tsx";

function App() {
    return (
        <div className="grid place-items-center h-screen">
            <Header/>
            <main>
                <section className="">
                    <WeatherBoard/>
                </section>
            </main>
        </div>
    )
}

export default App
