const getImageCollection = () => (
    fetch('http://192.168.0.101:8888/api/get_imagecollection.php')
    .then(response => response.json())
);
export default getImageCollection;