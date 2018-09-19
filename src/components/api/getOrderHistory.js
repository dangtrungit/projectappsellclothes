const url = 'http://192.168.0.101:8888/api/order_history.php'
const getOrderHistory = (token) => (
   
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token  })
    }).then((response) => response.json())

);

module.exports = getOrderHistory;