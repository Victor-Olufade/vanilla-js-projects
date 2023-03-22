const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', ()=>{
    const randomNumber = generateRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color = colors[randomNumber];
})

const generateRandomNumber = () => {
    return Math.floor(Math.random() * (colors.length + 1))
}
