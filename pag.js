const nombre= document.getElementById('alum')
const button= document.querySelector('button')
const dato= e=>alert(e)

nombre.addEventListener('click',()=>{
    dato(nombre.textContent)
})
button.addEventListener('click',()=>{
    dato(button.textContent)
})

// console.log(nombre)
