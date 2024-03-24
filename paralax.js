let dropShadow = document.querySelectorAll('.drop_shadow')
let newShadow = document.querySelectorAll('.sl_moon')
window.addEventListener('mousemove', function(event) {
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i < dropShadow.length; i++){
        let list = dropShadow[i]
        list.style.transform = `translate(-${x/50}px, -${y/50}px)`
    }
    /* for(let j = 0; j < newShadow.length; j++){
        let newList = newShadow[j]
        newList.style.transform = `translate(${x/150}px, ${y/150}px)`
    } */
})