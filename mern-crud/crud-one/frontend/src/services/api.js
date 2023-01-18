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

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while using getUser API', error);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log('Error while using editUser API', error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('Error while using deleteUser API', error);
    }
}

