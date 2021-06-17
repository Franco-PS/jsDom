const nombre= document.getElementById('alum')
const button= document.querySelector('button')
const dato= e => {
    alert(e.target.textContent)
}

nombre.addEventListener('dblclick',e => {
    dato(e)
})
button.addEventListener('click',e =>{
    dato(e)
})
