import API from '@/services/API';

export default {
    register(credentials) {
        return API().post('register', credentials);
    }
}


// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })