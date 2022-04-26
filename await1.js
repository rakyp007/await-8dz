const btn = document.getElementById('btn')
const div = document.getElementById('innerhtnml')
btn.addEventListener('click',getInnerhtml)
function getInnerhtml(){
    async () => {
        const response = fetch('https://jsonplaceholder.typicode.com/users')
        const data = await (await response).json()

        data.forEach(obj => {
            Object.entries(obj).forEach(([name,email]) => {
                div.innerHTML += 
                `<ol>
                <li>${obj.name}</li>
                <li>${obj.email}</li>
                -------------------
                </ol>`
            })
        });
    }
}