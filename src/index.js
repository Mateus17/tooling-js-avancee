// @flow

console.log("ok");

fetch("https://api.myjson.com/bins/9l2ez")
  .then(response => {
    response.json().then(data => {
      const todoElem = document.getElementById("todo");
      const list = document.createElement("ul");

      todoElem.appendChild(list);

      for (let i = 0; i < data.todos.length; i++) {
        const elemList = document.createElement("li");
        const textElem = document.createTextNode(data.todos[i].label);

        if (data.todos[i].complete) {
          elemList.classList.add("complete");
        }

        elemList.addEventListener("click", (e) => {
          e.target.classList.toggle("complete");
        });

        elemList.appendChild(textElem);
        list.appendChild(elemList);
      }
    });
  })
  .catch(error => {
    console.log(
      `There has been a problem with your fetch operation: ${error.message}`
    );
  });
