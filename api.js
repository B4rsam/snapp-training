export function getList() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      let i = 0;
      const cardArea = document.getElementById("cardArea");
      const list = json.map((item) => {
        const card = document.createElement("div");
        card.id = "card" + i;
        card.classList.add("card");
        card.innerHTML = `
          <h4 class="cardTitle">${item.title}</h4>
          <p class="cardBody">${item.body}</p>
          <div class="cardBox">
            <h5 class="classUserId">User ID: ${item.userId}</h5>
            <h5 class="classId">ID: ${item.id}</h5>
          </div>
          <button class="cardButton" id="button${i}" onclick="myFunction()">Delete Entry</button>
          `;
        i++;
        return card;
      });
      list.forEach((element) => {
        cardArea.appendChild(element);
      });
    }).catch(() => {console.log("fail")});
}


