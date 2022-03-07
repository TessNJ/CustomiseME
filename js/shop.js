/*Getting Databse */

let url = "https://kea21a2sem-d273.restdb.io/rest/t7-soap";

const urlParams = new URLSearchParams(window.location.search);
console.log("URL params: " + urlParams);
const category = urlParams.get("Category");
console.log("category param: " + category);

const options = {
  headers: {
    "x-apikey": "6207b72c34fd621565858402",
  },
};

function showSoaps(soaps) {
  console.log("Success!");
  //Grab template
  const template = document.querySelector("#shop_template").content;
  //Clone it
  const copy = template.cloneNode(true);
  //Change content
  copy.querySelector(".shop_name").textContent = soaps.Name;
  copy.querySelector(".shop_price").textContent = `${soaps.Price} DKK`;
  //Grab parent
  const parent = document.querySelector(".dynamic_content");
  //Append Child
  parent.appendChild(copy);
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
