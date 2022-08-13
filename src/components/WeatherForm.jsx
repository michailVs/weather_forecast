import {useState} from 'react'
import {weather} from "../WeatherApi";

const WeatherForm = ({setData, setIsData}) => {
    const [city, setCity] = useState('')
    const feachWeather = async (e) => {
        e.preventDefault()
        const {data} = await weather(city)
        console.log(data)
        setCity('')
        setData(data)
        setIsData(true)
    }
    return (
        <form>
            <input type="text"
                placeholder='Введите город'
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <button onClick={feachWeather}>Запросить погоду</button>
        </form>
    )
}

export default WeatherForm