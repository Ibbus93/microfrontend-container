import Axios from 'axios';

const endPoint = process.env.REACT_APP_API;

const getHeaders = (token) => ({
    Authorization: `Bearer ${token}`
});

const get = ({ id, token }) => Axios.get(`${endPoint}/user/${id}`, { headers: getHeaders(token)});

export {
    get
};
