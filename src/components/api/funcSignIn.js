const url = 'http://192.168.1.4:8888/api/login.php'
const funcSignIn = ( email, password) => (
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
            email : email,
            password : password,
        })
    }).then((response) => response.json())

);

module.exports = funcSignIn;