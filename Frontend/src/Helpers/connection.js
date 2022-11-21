import axios from 'axios'

function defineURL() {
    if (window.location.origin.indexOf("localhost") === -1) {
        return window.location.origin
    } else {
        return "http://localhost:8999"
    }
}


export default axios.create({
    baseURL: defineURL() + '/api'
})