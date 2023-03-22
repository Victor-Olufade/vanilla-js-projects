let count = 0;

let value = document.getElementById('value')

const buttons = document.querySelectorAll('.btn')

buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        const buttonClasses = event.currentTarget.classList
        if(buttonClasses.contains('increase')){
            count++
        }
        else if(buttonClasses.contains('decrease')){
            count--
        }
        else{
            count = 0
        }
        value.textContent = count;

        if(count > 0){
            value.style.color = 'green'
        }
        if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0) value.style.color = '#222'
    })
})