
  const getListProduct = (idType,page ) => {
    const url = `http://192.168.0.101:8888/api/product_by_type.php?id_type=${idType}&page=${page}`
   return fetch(url).then(response => response.json()) 

  };
  export default getListProduct;