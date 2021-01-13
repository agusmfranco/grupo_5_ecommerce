let items = document.getElementsByTagName("article");

let prices = [];

for (let index = 0; index < items.length; index++) {
  document.getElementById(index + "_price").innerText =
    "$ " +
    document.getElementById(index + "_quantity").value *
      document.getElementById(index + "_u_price").innerText;
  prices.push(
    parseFloat(
      document.getElementById(index + "_price").innerText.replace("$ ", "")
    )
  );
}

document.getElementById("total").innerText =
  "$ " + prices.reduce((a, b) => a + b, 0);

for (let index = 0; index < items.length; index++) {
  document.getElementById(index + "_price").value =
    "$ " +
    document.getElementById(index + "_quantity").value *
      document.getElementById(index + "_u_price").innerText;
}

for (let index = 0; index < items.length; index++) {
  document
    .getElementById(index + "_quantity")
    .addEventListener("change", (event) => {
      document.getElementById(index + "_price").innerText =
        "$ " +
        document.getElementById(index + "_quantity").value *
          document.getElementById(index + "_u_price").innerText;

      prices = [];

      for (let index = 0; index < items.length; index++) {
        prices.push(
          parseFloat(
            document
              .getElementById(index + "_price")
              .innerText.replace("$ ", "")
          )
        );
        document.getElementById("total").innerText =
          "$ " + prices.reduce((a, b) => a + b, 0);
      }
    });
}

for (let index = 0; index < items.length; index++) {
  document
    .getElementById(index + "_delete")
    .addEventListener("mouseup", (event) => {
      event.preventDefault();
      fetch("checkout/delete", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: document.getElementById(index + "_item_id").innerText,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          let item = document.getElementById(index + "_item");
          item.parentNode.removeChild(item);
        });
    });
}

let buyButton = document.getElementById("buy_button");

buyButton.addEventListener("mouseup", (event) => {
  let total = document.getElementById("total").innerText.replace("$ ", "");
  let detail = {};

  for (let index = 0; index < items.length; index++) {
    let id = document.getElementById(index + "_id").innerText;
    detail[id] = document.getElementById(index + "_quantity").value;
  }

  fetch("checkout/purchase", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      total: total,
      detail: detail,
    }),
  });

  window.location.replace("checkout/checkmark");
});
