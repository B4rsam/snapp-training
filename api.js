export function getList() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      let i = 0;
      //const cardList = document.createElement("div");
      //cardList.classList.add("cardlist");
      const cardArea = document.getElementById("cardArea");
      const list = json.map((item) => {
        const card = document.createElement("div");
        card.id = "card" + i;
        card.innerHTML = `
          <h4 class="cardTitle">${item.title}</h4>
          <p class="cardBody">${item.body}</p>
          <div class="cardBox">
            <h5 class="classUserId">User ID: ${item.userId}</h5>
            <h5 class="classId">ID: ${item.id}</h5>
          </div>
          <button class="cardButton" id="button${i}" onclick="${() => deleteCard}">Delete Entry</button>
          `;
        i++;
        /*const card = document.createElement("div");
        const cardTitle = document.createElement("h4");
        const cardBody = document.createElement("p");
        const cardIdButtonBox = document.createElement("div");
        const cardId = document.createElement("h5");
        const cardUserId = document.createElement("h5");
        const cardButton = document.createElement("button");

        cardTitle.classList.add("cardTitle");
        cardBody.classList.add("cardBody");
        cardId.classList.add("classId");
        cardUserId.classList.add("classUserId");
        cardIdButtonBox.classList.add("cardBox");
        cardButton.classList.add("cardButton");

        cardTitle.textContent += item.title;
        cardBody.textContent += item.body;
        cardId.textContent += "ID: " + item.id + " ";
        cardUserId.textContent += "User ID: " + item.userId;
        cardButton.textContent = "Delete Entry";

        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        cardIdButtonBox.appendChild(cardId);
        cardIdButtonBox.appendChild(cardUserId);
        card.appendChild(cardIdButtonBox);
        card.appendChild(cardButton);

        card.id = "card" + i;
        cardButton.id = "button" + i;

        card.classList.add("card");
        i++;

        cardButton.addEventListener("click", deleteCard); */
        return card;
      });
      list.forEach((element) => {
        cardArea.appendChild(element);
        //cardList.classList.add("cardArea");
      });
      //console.log(cardList);
      //document.getElementById("cardArea").appendChild(cardList);
    }).catch(() => {console.log("fail")});
}

function deleteCard() {
  console.log("Delete called from button id: " + this.id);
  let id = toString(this.id);
  const parent = document.getElementById(this.id).parentElement;
  fetch("https://jsonplaceholder.typicode.com/posts/" + id.match(/(\d+)/), {
    method: "DELETE",
  }).then(() => {console.log("Deleted element: " + this.id);
                 if (parent) {parent.remove()}});
}
