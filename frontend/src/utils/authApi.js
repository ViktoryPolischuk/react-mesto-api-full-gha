import BaseApi from "./BaseApi";
import {authApiConfig} from "./constants";

class AuthApi extends BaseApi {
  signUp({email, password}) {
    return this._fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({email, password})
    });
  }

  signIn({email, password}) {
    return this._fetch('/signin', {
      method: 'POST',
      body: JSON.stringify({email, password})
    });
  }

  signOut() {
    return this._fetch('/signout', {
      method: 'POST',
    });
  }

  checkUser() {
    return this._fetch('/users/me', {
      method: 'GET',
    });
  }
}

const authApi = new AuthApi(authApiConfig);
export default authApi;
