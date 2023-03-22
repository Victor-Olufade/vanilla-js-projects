const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

const generateRandomHex = () => {
    return Math.floor(Math.random() * hex.length)
}

button.addEventListener('click', ()=>{
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[generateRandomHex()]
    }

    document.body.style.backgroundColor = hexColor;
    color = hexColor;
})


