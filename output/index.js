"use strict";

console.log("ok");

fetch("https://api.myjson.com/bins/9l2ez").then(function (response) {
  response.json().then(function (data) {
    var todoElem = document.getElementById("todo");
    var list = document.createElement("ul");

    todoElem.appendChild(list);

    for (var i = 0; i < data.todos.length; i++) {
      var elemList = document.createElement("li");
      var textElem = document.createTextNode(data.todos[i].label);

      if (data.todos[i].complete) {
        elemList.classList.add("complete");
      }
      elemList.appendChild(textElem);
      list.appendChild(elemList);
      console.log(data.todos[i]);
    }
  });
}).catch(function (error) {
  console.log("There has been a problem with your fetch operation: " + error.message);
});