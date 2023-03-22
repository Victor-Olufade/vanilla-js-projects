//using selectors inside the element
// traversing the dom

// Method 1

// const buttons = document.querySelectorAll('.question-btn')

// buttons.forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         let currentBtn = e.currentTarget.parentElement.parentElement;
//         currentBtn.classList.toggle('show-text')
//     })
// })

// Method 2

const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    const button = question.querySelector('.question-btn');
    button.addEventListener('click', ()=>{
        questions.forEach((item)=>{
                    item !== question ? item.classList.remove('show-text') : null;
                })
        question.classList.toggle('show-text')
    })
    
})

