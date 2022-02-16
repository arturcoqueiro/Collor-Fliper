const colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const color = document.querySelector('.color')
const btn = document.getElementById('btn')

btn.addEventListener('click', function(){

    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        
        hexColor += colors[randomNumber()]
    }
    
    color.textContent = hexColor
    color.style.color = color.textContent
    document.body.style.backgroundColor = color.textContent
})

function randomNumber(){

    return Math.floor(Math.random() * colors.length) 
}