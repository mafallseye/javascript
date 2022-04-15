//selecteur
//document.querySelector("h4").style.background = "red";
//let doc = document.querySelector("h4");
//doc.style.background = "yellow";
//click event
const questionContener = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");
//console.log(response);
questionContener.addEventListener("click", () => {
  //   questionContener.style.background = "red";
  questionContener.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  //console.log("click !");
  // response.style.visibility = "visible";
  response.classList.add("show-response");
  response.style.background = "pink";
});
btn2.addEventListener("click", () => {
  // console.log("click !");
  //response.style.visibility = "visible";
  response.classList.add("show-response");
  response.style.background = "red";
});
