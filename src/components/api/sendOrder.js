const sendOrder = (token,arrayDetail) => {
   return fetch('http://192.168.0.101:8888/api/cart.php', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ token ,arrayDetail })
    }).then(response =>response.text())
};

module.exports = sendOrder;