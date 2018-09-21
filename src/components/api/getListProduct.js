
  const getListProduct = (idType,page ) => {
    let url=null;
    if (idType!=='COLLECTION'){
       url = `http://192.168.0.101:8888/api/product_by_type.php?id_type=${idType}&page=${page}`
    }else{
       url = `http://192.168.0.101:8888/api/get_collection.php?page=${page}`
    }
    
   return fetch(url).then(response => response.json()) 

  };
  export default getListProduct;