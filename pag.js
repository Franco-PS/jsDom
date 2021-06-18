const input= document.getElementById('input')

input.addEventListener('keyup',e => {
    if(e.ctrlKey === true && e.key === 'a'){
        alert('User CTRL A')
    }
})

