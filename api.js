
export function getList() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            const cardList = document.createElement("div");
            const list = json.map((item) => {
                const card = document.createElement("div");
                const cardTitle = document.createElement("h4");
                const cardBody = document.createElement("p");
                const cardIdButtonBox = document.createElement("div");
                const cardId = document.createElement("h5");
                const cardUserId = document.createElement("h5");

                cardTitle.classList.add("cardTitle");
                cardBody.classList.add("cardBody");
                cardId.classList.add("classId");
                cardUserId.classList.add("classUserId");
                cardIdButtonBox.classList.add("cardBox");

                cardTitle.textContent += item.title;
                cardBody.textContent += item.body;
                cardId.textContent += "ID: " + item.id + " ";
                cardUserId.textContent += "User ID: " + item.userId;

                card.appendChild(cardTitle);
                card.appendChild(cardBody);
                cardIdButtonBox.appendChild(cardId);
                cardIdButtonBox.appendChild(cardUserId);
                card.appendChild(cardIdButtonBox);

                card.classList.add("card");
                return card;
            }
             )
             list.forEach(element => {
                cardList.appendChild(element);
                cardList.classList.add("cardList");
             });
             console.log(cardList);
             document.getElementById("cardArea").appendChild(cardList); 
        })
        .catch(console.log("fail"));
}