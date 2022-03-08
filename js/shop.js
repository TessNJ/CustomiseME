/*Getting Databse */
const urlParams = new URLSearchParams(window.location.search);
console.log("URL params: " + urlParams);
const category = urlParams.get("Category");
console.log("category param: " + category);

let url = "https://kea21a2sem-d273.restdb.io/rest/t7-soap?Category=";

const options = {
  headers: {
    "x-apikey": "6207b72c34fd621565858402",
  },
};

function showSoaps(soaps) {
  console.log(soaps.Category);
  if (category == "all" || soaps.Category == category) {
    console.log("Success!");
    //Grab template
    const template = document.querySelector("#shop_template").content;
    //Clone it
    const copy = template.cloneNode(true);
    //Change content
    copy.querySelector(".shop_name").textContent = soaps.Name;
    copy.querySelector(".shop_price").textContent = `${soaps.Price} DKK`;
    copy.querySelector("img").src = soaps.img_src;
    copy.querySelector("img").alt = soaps.img_alt;
    copy
      .querySelector("a")
      .setAttribute("href", `product.html?id=${soaps._id}`);
    //Grab parent
    const parent = document.querySelector(".dynamic_content");
    //Append Child
    parent.appendChild(copy);
  }
}

if (category == "Base_product") {
  document.querySelector(".ShopPlace").textContent = `Base Products`;
} else if (category == "Shampoo") {
  document.querySelector(".ShopPlace").textContent = `Shampoo`;
} else if (category == "Lip_balm") {
  document.querySelector(".ShopPlace").textContent = `Lip Balms`;
} else if (category == "Hand_creme") {
  document.querySelector(".ShopPlace").textContent = `Hand Cremes`;
} else {
  document.querySelector(".ShopPlace").textContent = `See all products`;
}

fetch(url, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleSoaps(data);
  });

function handleSoaps(data) {
  console.log(data);
  data.forEach(showSoaps);
}
