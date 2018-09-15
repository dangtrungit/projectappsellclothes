const initData = () => (
    fetch('http://192.168.1.4:8888/api/')
    .then(response => response.json())
);
export default initData;