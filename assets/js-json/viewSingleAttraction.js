import { api_url } from "./config.js";
// const urlParams = new URLSearchParams(window.location.search);
// const attractionId = urlParams.get('attractionId');

// // 使用 productId 查詢商品信息
axios
  .get(`${api_url}/attractionsList`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
    alert(`${error.response.status}錯誤`);
  });



