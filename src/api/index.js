import axios from "axios"

export const register = async () => {
    let param = {};
    axios.post('/user/register', param)
}