const button = document.querySelectorAll(".formkit-submit");

button.forEach((item) => {
  item.addEventListener("click", (event) => {
    redirectPage();
  });
});

const redirectPage = function () {
  setTimeout(function () {
    document.location.href = "watch-form.html";
  }, 5000);
};
