
export function getList() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            const cardList = document.createElement("div");
            const list = json.map((item) => {
                const card = document.createElement("div");
                const cardTitle = document.createElement("h4");
                const cardBody = document.createElement("p");
                const cardId = document.createElement("h5");
                const cardUserId = document.createElement("h5");

                cardTitle.textContent += item.title;
                cardBody.textContent += item.body;
                cardId.textContent += "ID: " + item.id;
                cardUserId.textContent += "User ID: " + item.userId;

                card.appendChild(cardTitle);
                card.appendChild(cardBody);
                card.appendChild(cardId);
                card.appendChild(cardUserId);
                card.classList.add("card");
                return card;
            }
             )
             list.forEach(element => {
                cardList.appendChild(element);
             });
             console.log(cardList);
             document.getElementById("cardArea").appendChild(cardList); 
        })
        .catch(console.log("fail"));
}