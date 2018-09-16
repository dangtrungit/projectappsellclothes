const url = 'http://192.168.1.4:8888/api/registryuser.php'
const Register = (name, email, password) => (
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name :name,
            email : email,
            password : password,
        })
    }).then((response) => response.text())

);

module.exports = Register;