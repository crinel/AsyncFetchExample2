function getUser(userId) {
    if(userId) {
        return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json());
    } else {
        throw "error string";
        //throw new Error("please provide a user id !");
    }
}

function getUserPosts(userId){
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

var userId = 1;

getUser(userId).then( user => {
    console.log("the user ", user); 
    return getUserPosts(user.id);
}).then( posts => {
    console.log("   the user first post ", posts[0]);
    return getPostComments(posts[0].id);
}).then( comments => {
    console.log("      the post first comment ", comments[0]);
    return Promise.all([
        getUserAlbums(userId),
        getUserToDos(userId)
    ]);
}).then( arrayOfPromisesResponse => {
    const albums = arrayOfPromisesResponse[0];
    const firstAlbum = albums[0];
    console.log("         the user's first album ", firstAlbum);

    
    const todos = arrayOfPromisesResponse[1];
    const firstToDo = todos[0];
    console.log("         the user's first album ", firstToDo);
}).catch( errorMsg => console.log("The error " + errorMsg) );


// getUser(userId, (user) => {
//     console.log("the user ", user);
//     getUserFirstPost(user.id, (firstPost) => {
//         console.log("the first post ", firstPost);
//         getPostComments(firstPost.id, (firstComment) => {
//             console.log("the first comment ", firstComment);
//             getUserAlbums(user.id, (firstAlbum) => {
//                 console.log("the first album ", firstAlbum);
//             })
//             getUserToDos(user.id, (firstTodo) => {
//                 console.log("the first todo ", firstTodo);
//             })
//       })  
//     })
// })