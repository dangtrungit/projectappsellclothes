import saveToken from './saveToken'
const url = 'http://192.168.1.4:8888/api/refresh_token.php'
const refreshToken = (token) => (
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token  })
    }).then((response) => response.text())
    .then(tokensave => saveToken(tokensave))

);

module.exports = refreshToken;