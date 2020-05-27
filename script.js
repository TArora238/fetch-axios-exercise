function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
        })
        .catch(error => {
            console.log(error);
        });
}
function axiosData() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
setTimeout(function () {
    fetchData();
    axiosData();
}, 2000);