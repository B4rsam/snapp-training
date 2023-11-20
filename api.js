
export function getList() {
    let output = "<ul>\n";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < 100; i++)
            {
                output = output + "userid: " + json[i].userId + " id: " + json[i].id + " title: " + json[i].title + " body: " + json[i].body + "\n";
            }
        })
        .catch(console.log("fail"));
    output += "</ul>";
    console.log(output);
    document.getElementById("bigBox").innerHTML = output;
}