function getUser(userId) {
    if(userId) {
        return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json());
    } else {
        throw new Error("please provide a user id !");
    }
}

function getUserLastPost(userId){
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(response => response.json());
}

function getPostComments(postId){
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
    .then(response => response.json());
}

function getUserAlbums(userId){
    return fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
    .then(response => response.json());
}

function getUserToDos(userId){
    return fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
    .then(response => response.json());
}