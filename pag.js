const button= document.getElementById('boton')
const title= document.getElementById('alum')
const desplazamenu= ()=>{
    // queriSelector no puede ir en el if(..)?
    if(document.getElementById('boton')){
        console.log('hola')
    }

    button.classList.toggle('buttonDisable')

}

title.addEventListener('click',desplazamenu)
