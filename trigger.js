const popup = document.querySelector('.popup')
const closeButton = document.querySelector('#close-button')
const depositButton = document.querySelector('#deposit-button')

closeButton.addEventListener('click', function(){
    popup.classList.add('hidden')
})

depositButton.addEventListener('click', function(){
    popup.classList.add('hidden')
})


document.addEventListener('keyup', (e) => {
    if (e.code === "ArrowUp"){
        popup.classList.remove('hidden')
        popup.classList.remove('close')
    }
});