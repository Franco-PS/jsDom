
let x=0,y=0
addEventListener('keyup',e=>{
    const ed= document.getElementById('unico')
    console.log(e.key)
    
    const move= () => ed.style.transform= `translate(${x*20}px,${y*20}px)`
    const up= ()=> {
        y--
        move()
        console.log(x,y)
    }
    const down= ()=> {
        y++
        move()
        console.log(x,y)
    }
    const left= ()=> {
        x--
        move()
        console.log(x,y)
    }
    const right= ()=> {
        x++
        move()
        console.log(x,y)
    }

    switch (e.key){
        case 'ArrowUp':
            up()
            break;
        case 'ArrowDown':
            down()
            break;
        case 'ArrowLeft':
            left()
            break;
        case 'ArrowRight':
            right()
            break;
        default:
            break;

    }
})
