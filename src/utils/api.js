import axios from 'axios';

const baseOptions = {
    headers: {
        clientId: 'tmartin',
    },
};

export const getClient = (url, options = baseOptions) => {
    return axios.get(url);
};