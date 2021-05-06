//  Adiciona cada cor na paleta de cores
function paletaCores() {
    const color = document.querySelectorAll(".color");
    for (let index = 0; index < color.length; index += 1) {
        if (index === 0){
            color[index].style.backgroundColor = 'rgb(0, 0, 0)';
            color[index].addEventListener('click', addSelected);
        } else {
            color[index].style.backgroundColor = geraRGB();
            color[index].addEventListener('click', addSelected);
        }
    }
}

paletaCores();

//  Gera uma cor aleatória
function geraRGB() {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;

    if (color !== 'rgb(255, 255, 255)') {
        return color; 
    }
}

//  Adiciona o quadro de pixels
let linhas = document.querySelectorAll('.linha');

function createPixelBoard(lines) {
    for (let i = 0; i < linhas.length; i += 1) {
        console.log(linhas[i]);

        for (let j = 0; j < 5; j += 1) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            linhas[i].appendChild(pixel);
        }
    }
}

createPixelBoard(linhas);

//  Define a cor preta como pré-selecionada 
function startColor() {
    let black = document.querySelector(".color");
    black.classList.add("selected");
}

startColor();

console.log(document.querySelector('.color'));

// Reatribui a classe selected à cor selecionada na paleta
function addSelected(event) {
    let selectedElement = document.querySelector(".selected");
    selectedElement.classList.remove('selected');
    event.target.classList.add("selected");
}

// Clicar em um pixel no quadro de Pixels transforma a sua cor para a cor selecionada na paleta
function setColor() {
    const boxes = document.querySelectorAll('.pixel');

    for (let index = 0; index < boxes.length; index += 1) {
        boxes[index].addEventListener('click', (event) => {
            event.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
        });
    }
}

setColor();

// Cria um botão que remove a cor de todos os pixels
function createButton() {
    const btnContainer = document.getElementById('button-container');
    const btnClear = document.createElement('button');
    btnClear.innerText = 'Limpar';
    btnClear.id = 'clear-board';
    btnContainer.appendChild(btnClear);
}

createButton();

function clearBoard() {
    const boxes = document.querySelectorAll('.pixel');

    for (let index = 0; index < boxes.length; index += 1) {
        boxes[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', clearBoard);

//  Faça o quadro de pixels ser definido pela pessoa usuaria 


