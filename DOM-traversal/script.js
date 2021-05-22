// DOM Selection
// const closeCard = document.querySelector(".close");
// const card = document.querySelector(".card");
// closeCard.addEventListener("click", function () {
//   card.style.display = "none";
// });

// // DOM Traversal
// const closeCard = document.querySelectorAll(".close");
// // const card = document.querySelectorAll(".card");
// // console.log(closeCard);
// for (let i = 0; i < closeCard.length; i++) {
//   closeCard[i].addEventListener("click", function (e) {
//     // alert("tombol ke-" + i);
//     //
//     // closeCard[i].parentElement.style.display = "none";
//     //
//     e.target.parentElement.style.display = "none";
//   });
// }

// closeCard.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation()
//   });
// });

// // const name = document.querySelector(".name");
// // // console.log(name);
// // // console.log(name.parentElement);
// // // console.log(name.parentNode);
// // // console.log(name.parentElement.parentElement);
// // // console.log(name.nextSibling);
// // console.log(name.nextElementSibling);

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
