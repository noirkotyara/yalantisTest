import * as axios from 'axios';
// const axios = require('axios');


export const Employee = {
    
    getEmployee ()  {
        return axios.get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`);
    }
}
