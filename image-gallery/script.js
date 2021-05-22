const thumbnails = document.querySelector(".thumbnails");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");
thumbnails.addEventListener("click", function (e) {
  jumbo.src = e.target.src;
  jumbo.classList.add("fade");
  setTimeout(function () {
    jumbo.classList.remove("fade");
  }, 500);
  thumbs.forEach(function (thumb) {
    thumb.className = "thumb";
  });
  e.target.classList.add("active");
});
