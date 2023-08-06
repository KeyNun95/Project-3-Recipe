import tokenService from './tokenService';
//we are getting this url from the .use in the server
const BASE_URL = '/api/users/';
//client side code
function signup(user) {
  //we dont want fetch to occur until we call the function which is why we need "return" here
  //this fetch request is making an http POST request to server to run controller function in routes/users file
  //router.post "/signup" to trying to communicate to usersCtrl.signup
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    //we have to tell the api he data we are sending so we need this header, except it is a file/photo
    //the browser will deetct the request and apply the proper headers
    // headers: new Headers({'Content-Type': 'application/json'}),
    //this is the context of the form we are sending to server. We are changing the info in state into json
    body: user //no need for jsonify if formdata
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // The above could have been written as
  //.then((token) => token.token); this sets the token in the browser
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getProfile(username){
  return fetch(`${BASE_URL}${username}`, {
    method: 'GET',
    headers: {
      Authorization: "Bearer " + tokenService.getToken()
    }
  }).then(responseFromTheServer => {
      if(responseFromTheServer.ok) return responseFromTheServer.json()
      throw new Error('Something went wrong in getProfile userService');
  })
}

export default {
  //these are the key-value pairs being exported ex: signup:signup
  signup, 
  getUser,
  logout,
  login,
  getProfile
};