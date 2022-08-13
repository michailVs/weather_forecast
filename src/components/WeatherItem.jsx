
const WeatherItem = ({data}) => {
    const newTime = new Date(data.dt * 1000)
    const year = newTime.getFullYear()
    const month = String(newTime.getMonth()).length < 2 ? '0' + newTime.getMonth() : newTime.getMonth()
    const date = String(newTime.getDate()).length < 2 ? '0' + newTime.getDate() : newTime.getDate()
    const hour = String(newTime.getHours()).length < 2 ? '0' + newTime.getHours() : newTime.getHours()
    const min = String(newTime.getMinutes()).length < 2 ? '0' + newTime.getMinutes() : newTime.getMinutes()
    const temp = Math.round(data.main.temp) >= 0 ? '+' + Math.round(data.main.temp) : Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like) >= 0 ? '+' + Math.round(data.main.feels_like) : Math.round(data.main.feels_like)
    const pressure = Math.round(data.main.grnd_level * 0.750063755419211)
    return (
        <div>
            <h2>Город: {data.name}</h2>
            <h3>Температура: {temp}&#176; | Влажность: {data.main.humidity} % | Скорость ветра: {data.wind.speed} м/с | Давление: {pressure} мм рт.ст. | Ощущяется: {feelsLike}&#176;</h3>
            {data.weather.map((item, index) => <h3 key={index}>Погода: {item.description}</h3>)}
            <p>Долгота: {data.coord.lon} | Широта: {data.coord.lat}</p>
            <p>Дата: {date}.{month}.{year} г. | Сейчас: {hour}:{min}</p>
        </div>
    )
}

export default WeatherItem