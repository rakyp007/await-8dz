
const click = document.getElementById('click')
function get(){
get('https://jsonplaceholder.typicode.com/users')
async function get(url){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

}

click.addEventListener('click', get)