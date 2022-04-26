const intput = document.getElementById('input')
const inputBtn = document.getElementById('inputbtn')

function funs (){
    const intValue=intput.value
    const num = 15
    async function getinit (){
            if ( intValue == num ){
                     return Promise.resolve("вы угадали ")
        
            }else {
                return Promise.reject('вы ошиблись ')
            }
    
}
getinit().then(res=>console.log(res),res=>console.log(res))
}
inputBtn.addEventListener('click',()=>{funs()})