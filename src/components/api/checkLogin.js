const url = 'http://192.168.0.100:8888/api/check_login.php'
const checkLogin = (token) => (
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token  })
    }).then((response) => response.json())

);

module.exports = checkLogin;