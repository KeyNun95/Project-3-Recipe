import tokenService from "./tokenService";

const BASE_URL = '/api/posts/'; //the base_url we need is in the server and pertains to which we are referencing
//STEP 7: make postApi so we can store our fetch requests
//making a request to create a POST
//this function will occur when a user is logged in so we have to send the token to the server
export function create(data){
    return fetch(BASE_URL, {
        method: 'POST',
        body: data,
        headers: {
            //convention for sending jwts (what does convention mean)
            //this is how we get the token from local storage and in to our api request
            //so the server knows who made the request
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(responseFromTheServer => {
        //if everything went well in the response we will return the parsed json to where we called the function
        if(responseFromTheServer.ok) return responseFromTheServer.json()
        //this will go to the catch block in RecipeForm function handleSubmit when it is called
        throw new Error('Something went wrong in create postApi');
    })
}

//this function calls all the posts all the users have made to the feedpage
//this function will not be called unless we have a useEffect in the feedpage
export function getAll(){
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(responseFromTheServer => {
        //if everything went well in the response we will return the parsed json to where we called the function
        if(responseFromTheServer.ok) return responseFromTheServer.json()
        //this will go to the catch block in RecipeForm function handleSubmit when it is called
        throw new Error('Something went wrong in getAll postApi');
    })
}