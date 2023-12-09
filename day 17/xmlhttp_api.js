console.clear();
// event - onload(), onerror()
// property - response , responseText, responseType,responseURL,status,statusText
// function - open() ,send() , setRequestHeader()

const makeRequest =(mathod,url,data)=>{
return new Promise ((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(mathod, url);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
    let data = JSON.parse(xhr.response); //converting into json file
    console.log(data);
    };
    xhr.onerror = () => {
    console.log(`error is here ...`);
    };

    xhr.send(JSON.stringify(data));

})
}
const getData=()=>{ // for getting the data 
makeRequest('GET','https://jsonplaceholder.typicode.com/posts').then(res=>console.log(res)).catch(err=>console.log(err));
}
const sendData=()=>{   // for sending the data
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
const updateData=()=>{   // for updating data
    makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "luffy",
    body: "rubber",
    userId: 1,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
updateData() // and its first?
sendData();   // why this works 2nd 
const updateSingleData=()=>{   // for updating a single data
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "JOY BOY",
    body: "nika",
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
const deletingData=()=>{   // for deleting data
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
deletingData();


console.log(`To be contineued `)