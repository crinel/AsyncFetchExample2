function getUser(userId, callback) {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(response => response.json())
    .then(json => callback(json))
}

function getUserLastPost(userId, callback){
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(response => response.json())
    .then(postsArray => callback(postsArray[0]))
}

function getPostComments(postId, callback){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
    .then(response => response.json())
    .then(commentsArray => callback(commentsArray[0]))
}

function getUserAlbums(userId, callback){
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
    .then(response => response.json())
    .then(albumsArray => callback(albumsArray[0]))
}

function getUserToDos(userId, callback){
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
    .then(response => response.json())
    .then(todosArray => callback(todosArray[0]))
}

getUser(1, (user) => {
    console.log("the user ", user);
    getUserLastPost(user.id, (lastPost) => {
        console.log("the last post ", lastPost);
        getPostComments(lastPost.id, (lastComment) => {
            console.log("the last comment ", lastComment);
            getUserAlbums(user.id, (lastAlbum) => {
                console.log("the last album ", lastAlbum);
            })
            getUserToDos(user.id, (lastTodo) => {
                console.log("the last todo ", lastTodo);
            })
      })  
    })
})