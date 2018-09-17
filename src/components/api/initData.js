const initData = () => (
    fetch('http://192.168.0.100:8888/api/')
    .then(response => response.json())
);
export default initData;