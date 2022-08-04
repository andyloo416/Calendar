var currentDay = document.getElementById("currentDay");
var currentdate = new Date();
var body = document.body;
var container = $(".container");

// var container = document.getElementsByClassName("container");
// var block = document.createElement("div");
// var time = document.createElement("div");
// var input = document.createElement("input");
// var save = document.createElement("button");

var datetime =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear();

currentDay.textContent = datetime;

for (var i = 1; i < 25; i++) {
  var block = document.getElementById("b" + i);
  var btn = document.getElementById("btn" + i);
  if (i < currentdate.getHours()) {
    if (btn) {
      btn.disabled = true;
      document.getElementById("todo-" + i).disabled = true;
    }
    block.style = "background-color: grey";
  } else {
    block.style = "background-color: green";
  }
}

$("button").click(function () {
  $("input").localStorage.setItem();
});

// function to create new element
// function newElement() {
//   time.innerHTML = i+" AM";
//   save.innerHTML = "SAVE";
//   block.setAttribute("id", "b"+i);
//   block.setAttribute(
//     "class",
//     "timeblock col d-flex justify-content-center mb-1"
//   );
//   input.setAttribute("id", "todo-"+i);
//   input.setAttribute("class", "content col-10");
//   save.setAttribute("class", "col-1");

//   body.appendChild(container);
//   container.appendChild(block);
//   block.appendChild(time);
//   block.appendChild(input);
//   block.appendChild(save);
// }

// newElement;

// for (var i = 0; i < 24; i++) {
//   if ($("#") = currentdate.getHours()){
//     console.log(currentdate.getHours())
//   }
// }
