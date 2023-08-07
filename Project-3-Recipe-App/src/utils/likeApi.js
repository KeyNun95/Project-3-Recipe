import tokenService from "./tokenService";

const BASE_URL = '/api/'

export function create(postId){
    return fetch(`${BASE_URL}posts/${postId}/likes`, {
        method: 'POST',
        headers: {
            Authorization:  "Bearer " + tokenService.getToken()
        }
    }).then(responseFromTheServer => {
        if(responseFromTheServer.ok) return responseFromTheServer.json()
        throw new Error('Something went wrong in creating like');
    })
}

export function removeLike(likeId){
    return fetch(`${BASE_URL}likes/${likeId}`, {
        method: 'DELETE',
        headers: {
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(responseFromTheServer => {
        if(responseFromTheServer.ok) return responseFromTheServer.json()
        throw new Error('Something went wrong in delete like');
    })
}