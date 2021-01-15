window.addEventListener("load", function () {
  fetch("/products/checkout/data")
    .then((response) => response.json())
    .then((data) => {
      if (data.items.length > 0) {
        document.querySelectorAll("#cart_div").forEach((element) => {
          element.innerHTML +=
            '<span class="absolute bg-white box-border px-1 font-roboto rounded-full border-2 border-biblogreen-500 text-biblogreen-500 font-semibold text-xs right-0">' +
            data.items.length +
            "</span>";
        });
      }
    });

  fetch("/users/data")
    .then((response) => response.json())
    .then((data) => {
      if (Object.keys(data).length > 0) {
        document.querySelectorAll("#user_div").forEach((element) => {
          element.innerHTML +=
            '<span class="text-xs block hover:text-biblogreen-700">' +
            data.first_name +
            "</span>";
        });
        document.querySelectorAll("#user_redirect").forEach((element) => {
          element.setAttribute("href", "/users/detail");
        });
      } else {
        document.querySelectorAll("#user_div").forEach((element) => {
          element.innerHTML +=
            '<span class="text-xs block hover:text-biblogreen-700">Ingresar</span>';
        });
      }
    });

  headerContainer = document.getElementById("header_container");
  genresLink = document.getElementById("genres_link");
  genresArrow = document.getElementById("genres_arrow");
  genresBox = document.getElementById("genres_box");

  genresLink.addEventListener("mouseenter", (e) => {
    genresArrow.classList.add("-rotate-180");
    genresBox.classList.remove("hidden");
  });

  genresBox.addEventListener("mouseenter", (e) => {
    genresArrow.classList.add("-rotate-180");
    genresBox.classList.remove("hidden");
  });

  genresBox.addEventListener("mouseleave", (e) => {
    genresArrow.classList.remove("-rotate-180");
    genresBox.classList.add("hidden");
  });

  headerContainer.addEventListener("mouseleave", (e) => {
    genresArrow.classList.remove("-rotate-180");
    genresBox.classList.add("hidden");
  });
});
