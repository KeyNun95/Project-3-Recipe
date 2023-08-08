import tokenService from "./tokenService";

const BASE_URL = '/api/'

export function create(postId, review){
    return fetch(`${BASE_URL}posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({review}),
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken()
        }
    }).then(responseFromTheServer => {
        console.log(responseFromTheServer);
        if(responseFromTheServer.ok) return responseFromTheServer.json()
        throw new Error('Something went wrong in creating comment')
    })
}