let url =
  "https://kea21a2sem-d273.restdb.io/rest/t7-soap/6221d597b55385400000e99b";

const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("_id");

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
}
