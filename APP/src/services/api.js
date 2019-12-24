import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.3:44339/api/Employees'
})

export default api
