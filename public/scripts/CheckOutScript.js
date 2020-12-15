window.addEventListener("load", function () {
  fetch("checkout/data?books_id=" + Object.keys(localStorage))
    .then((response) => response.json())
    .then((data) => console.log(data));
});
