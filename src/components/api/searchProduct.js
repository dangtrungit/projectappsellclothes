
const searchProduct = (key) => {
const url = `http://192.168.0.100:8888/api/search.php?key=${key}`
   return fetch(url).then(response => response.json()) 

  };
  export default searchProduct;