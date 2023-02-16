console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts() {
//     const response = await fetch(URL);
//     if (!response.ok) {
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     // console.log(data);
//     // console.log(response);
//     return data;
// }
// const returnPost = getPosts();
// console.log(returnPost);


// using arrow function

const getPosts = async() => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    // console.log(data);
    // console.log(response);
    return data;
}
getPosts()
    .then(myData => {
        console.log(myData);
    })
    .catch(err => {
        console.log("inside catch")
        console.log(err);
    })
console.log("script end");