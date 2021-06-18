
let x=0,y=0
addEventListener('keyup',e => {
    const ed= document.getElementById('unico')
    console.log(e.key)
    
    const move = (direction) => {
        switch(direction){
            case 'up':
                y--
                break;
            case 'down':
                y++
                break;
            case 'left':
                x--
                break;
            case 'right':
                x++
                break;
            default:
                break;
        }
        ed.style.transform= `translate(${x*20}px,${y*20}px)`
    }

    // const up= ()=> {
    //     y--
    //     move()
    //     console.log(x,y)
    // }
    // const down= ()=> {
    //     y++
    //     move()
    //     console.log(x,y)
    // }
    // const left= ()=> {
    //     x--
    //     move()
    //     console.log(x,y)
    // }
    // const right= ()=> {
    //     x++
    //     move()
    //     console.log(x,y)
    // }

    switch (e.key){
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right')
            break;
        default:
            break;

    }
})
