;
export function getList() {
    const bigBox = document.getElementById("bigBox")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => document.getElementById("bigBox").innerHTML)
    .catch(console.log("fail"))
    .finally(json => console.log(json));
}