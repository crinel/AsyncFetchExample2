function getUser(userId) {
    if(userId) {
        return fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json());
    } else {
        throw new Error("please provide a user id !");
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
async function getUserDetails(){
    const user = await getUser(userId);
    console.log("the user ", user); 
    const posts = await getUserPosts(user.id);
    console.log("   the user first post ", posts[0]);
    const comments = await getPostComments(posts[0].id);
    console.log("      the post first comment ", comments[0]);

    const arrayOfPromisesResponse = await Promise.all([
        getUserAlbums(userId),
        getUserToDos(userId)
    ]);

    const albums = arrayOfPromisesResponse[0];
    const firstAlbum = albums[0];
    console.log("         the user's first album ", firstAlbum);

    
    const todos = arrayOfPromisesResponse[1];
    const firstToDo = todos[0];
    console.log("         the user's first album ", firstToDo);
}
getUserDetails();

// getUser(userId).then( user => {
//     console.log("the user ", user); 
//     return getUserPosts(user.id);
// }).then( posts => {
//     console.log("   the user first post ", posts[0]);
//     return getPostComments(posts[0].id);
// }).then( comments => {
//     console.log("      the post first comment ", comments[0]);
//     return Promise.all([
//         getUserAlbums(userId),
//         getUserToDos(userId)
//     ]);
// }).then( arrayOfPromisesResponse => {
//     const albums = arrayOfPromisesResponse[0];
//     const firstAlbum = albums[0];
//     console.log("         the user's first album ", firstAlbum);

    
//     const todos = arrayOfPromisesResponse[1];
//     const firstToDo = todos[0];
//     console.log("         the user's first album ", firstToDo);
// }).catch( errorMsg => console.log("The error " + errorMsg) );