import Axios from 'axios';

const endPoint = process.env.REACT_APP_API;

const get = ({ id }) => Axios.get(`${endPoint}/user/${id}`);

export {
    get
};
