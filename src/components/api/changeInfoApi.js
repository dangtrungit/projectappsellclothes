const url = 'http://192.168.0.101:8888/api/change_info.php'
const changeInfoApi = (token, name, address, phone) => (
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, name, address, phone })
    }).then((response) => response.json())

);

module.exports = changeInfoApi;