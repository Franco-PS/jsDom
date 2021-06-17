const nombre= document.getElementById('alum')
const button= document.querySelector('button')
// const dato= e => alert(e.target.textContent)

// nombre.addEventListener('dblclick',e => {
//     dato(e)
// })
// button.addEventListener('click',e =>{
//     dato(e)
// })

const creaMenu= e=> {
    const menu= document.createElement('div')
    const prevMenu= document.getElementById('menuu')
    menu.setAttribute('id','menuu')
    menu.textContent= 'document'

    if(prevMenu){
        document.body.removeChild(prevMenu)
    }

    document.body.appendChild(menu)

    menu.style.background= '#eee'
    menu.style.padding= '1em'
    menu.style.position= 'fixed'
    menu.style.top= `${e.pageY}px`
    menu.style.left= `${e.pageX}px`
}

document.addEventListener('contextmenu', e => {
    creaMenu(e)
    e.preventDefault()
})
