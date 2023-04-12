import Api from './index';

class AuthApi extends Api {
  login(body) {
    return this.post({url: '/login', body});
  }

  register(body) {
    return this.post({url: '/register', body});
  }

  verify(body) {
    return this.post({url: '/verify/pin', body});
  }
  forgotPassword(body){
    return this.post({url:'/forgot/password',body})
  }
  resetPassword(body){
    return this.post({url:'/reset/password',body})
  }
}

const authApi = new AuthApi();

export default authApi;
