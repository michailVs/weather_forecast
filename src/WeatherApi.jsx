import axios from 'axios'

export const weather = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=791fb35c8d2631ea1c117a7f95b46a7e`)
    return response
}