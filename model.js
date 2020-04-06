function getUser(userId, callback) {
    if(userId) {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(json => callback(json))
    } else {
        throw new Error("please provide a user id !");
    }
}

// function ceva(param) {
//     console.log(param);
//     return param+1;
// }

//  const ceva = (param) => {
//      console.log(param);
//      return param+1;
// }

// const ceva = param => param+1;


function getUserFirstPost(userId, callback){
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    .then(function(response) { 
        return response.json()
    })
    .then(postsArray => callback(postsArray[0]))
}

function getPostFirstComment(postId, callback){
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
    .then(response => response.json())
    .then(commentsArray => callback(commentsArray[0]))
}

function getUserFirstAlbum(userId, callback){
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
    .then(response => response.json())
    .then(albumsArray => callback(albumsArray[0]))
}

function getUserFirstToDo(userId, callback){
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
    .then(response => response.json())
    .then(todosArray => callback(todosArray[0]))
}

var userId = 1;
getUser(userId, (user) => {
    console.log("the user ", user);
    getUserFirstPost(user.id, (firstPost) => {
        console.log("the first post ", firstPost);
        getPostFirstComment(firstPost.id, (firstComment) => {
            console.log("the first comment ", firstComment);
            getUserFirstAlbum(user.id, (firstAlbum) => {
                console.log("the first album ", firstAlbum);
            })
            getUserFirstToDo(user.id, (firstTodo) => {
                console.log("the first todo ", firstTodo);
            })
      })  
    })
})