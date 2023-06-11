const url = 'http://localhost:5500/api'
const newUser = {
    name: 'Olivia',
    avatar: 'http://lorempixel.com/400/200/',
    city: 'Rio do Sul'
};

const users = [];

function getUser(){
    axios.get(url)
    .then(res => {
        const data = res.data;
        renderResults.textContent = JSON.stringify(data)        
    })
    .catch(error => console.log(error))
}

//getUser()

function addNewUser(){
    axios.post(url, newUser)
    .then(res => {
        alert(res.data)
    })
    .catch(error => console.log(error))
}

//addNewUser()

function getOneUser(id){
    axios.get(`${url}/${id}`)
    .then(res => {
        renderResults.textContent = JSON.stringify(res.data)
    })
    .catch(error => console.log(error))
}

getOneUser(1)