const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
// const id = urlParams.get("_id");
let url =
  "https://kea21a2sem-d273.restdb.io/rest/t7-soap/6221d701b55385400000e9bc";

const option = {
  headers: {
    "x-apikey": "6207b72c34fd621565858402",
  },
};

fetch(url, option)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProduct(data);
  });

function handleProduct(soaps) {
  document.querySelector(".single_img").src = soaps.img_src;
  document.querySelector(".single_img").alt = soaps.img_alt;
  document.querySelector(".singleProduct_name").textContent = soaps.Name;
  document.querySelector(
    ".singleProduct_price"
  ).textContent = `DKK ${soaps.Price}`;
  document.querySelector(".singleProduct_oils").textContent =
    soaps.Essential_Oils;
  document.querySelector(".singleProduct_colour").textContent = soaps.Colour;
  document.querySelector(".singleProduct_shape").textContent = soaps.Shape;
  document.querySelector(".singleProduct_weight").textContent = soaps.Weight;
  document.querySelector(".singleProduct_availability").textContent =
    soaps.Availability;
}
