import * as axios from 'axios';
// const axios = require('axios');
const instance = axios.create({
    baseURL: '​https://yalantis-react-school-api.yalantis.com/api/task0'
});

export const Employee = {
    getEmployee ()  {
        return instance.get(`/users`)
            .then(resp => { debugger; })
    }
}
