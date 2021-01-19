window.onload = function () {
  let addButton = document.getElementById("add_button");

  addButton.addEventListener("mouseup", function () {
    data = new FormData(document.getElementById("product_form"));
    fetch("checkout/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        book_id: data.get("book_id"),
        quantity: data.get("quantity"),
      }),
    }).then((response) => {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        response.json().then((data) => {
          document.querySelectorAll("#cart_div").forEach((element) => {
            element.innerHTML +=
              '<span class="absolute bg-white box-border px-1 font-roboto rounded-full border-2 border-biblogreen-500 text-biblogreen-500 font-semibold text-xs right-0">' +
              JSON.parse(data).length +
              "</span>";
          });
          addButton.blur();
        });
      } else {
        addButton.blur();
        window.location.href = "/products/checkout/add";
      }
    });
  });
};
