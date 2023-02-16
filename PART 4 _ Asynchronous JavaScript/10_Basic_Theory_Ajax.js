// BASIC THEORY

// AJAX : asynchronous javascript and XML

// is a set of "web development techniques"
// using many web technologies on the "client-side"
// to create asynchronous web applications.

// With AJAX, web applications can send and retrieve
// data from the server asynchronously (in the background)
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore.
// we use JSON now.

// we have 3 most common ways to create and send request to server
// 1) xmlHTTPRequest (old way of doing)
// 2) fetch API (new way of doing)
// 3) axios (this is third party library)

// client means browser
// post ---> used for data create
// get -----> used to read the data

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// step 1 
xhr.open("GET", URL);

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(xhr);
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }

xhr.onload = function() {
    // console.log(xhr.readyState)
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send()