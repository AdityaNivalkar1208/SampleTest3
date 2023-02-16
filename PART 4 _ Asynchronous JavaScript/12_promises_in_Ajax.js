const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error("Something went wrong"));
            }
        }

        xhr.onerror = function() {
            reject(new Error("Something went wrong"));
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
    // console.log(whatisthis);
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data);
        return data;
    })
    .then(data => {
        const id = data[3].id;
        // console.log(id1);
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        // console.log(url);
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newdata = JSON.parse(newResponse);
        console.log(newdata);
    })
    .catch(error => {
        console.log(error);
    })