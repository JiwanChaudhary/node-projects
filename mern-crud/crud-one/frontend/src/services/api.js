import axios from "axios";

const URL = 'http://localhost:5000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/adduser`, data)
    } catch (error) {
        console.log('Error while calling add user api', error);
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/allusers`)
    } catch (error) {
        console.log('Error while using getUsers API', error);
    }
}
