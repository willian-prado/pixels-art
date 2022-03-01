// Reatribui a classe selected à cor selecionada na paleta
function addSelected(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}

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

//  Adiciona cada cor na paleta de cores
function paletaCores() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    if (index === 0) {
      color[index].style.backgroundColor = 'rgb(0, 0, 0)';
      color[index].addEventListener('click', addSelected);
    } else {
      color[index].style.backgroundColor = geraRGB();
      color[index].addEventListener('click', addSelected);
    }
  }
}

paletaCores();

//  Faça o quadro de pixels ser definido pela pessoa usuaria
//  Cria o quadro de pixels de acordo com o input

function createPixelBoard(n) {
  const board = document.querySelector('#pixel-board');
  board.innerHTML = '';

  for (let i = 0; i < n; i += 1) {
    const linhas = document.createElement('div');
    linhas.className = 'linha';
    board.appendChild(linhas);

    for (let j = 0; j < n; j += 1) {
      const linha = document.querySelectorAll('.linha');
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha[i].appendChild(pixel);
    }
  }
}

// Clicar em um pixel no quadro de Pixels transforma a sua cor para a cor selecionada na paleta
function setColor() {
  const boxes = document.querySelectorAll('.pixel');

  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].addEventListener('click', (event) => {
      const box = event.target;
      box.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}

function geraBoard() {
  let n = document.querySelector('#board-size').value;

  if (n === '') {
    alert('Board inválido!');
  } else if (n < 5) {
    n = 5;
    createPixelBoard(n);
    setColor();
  } else if (n > 50) {
    n = 50;
    createPixelBoard(n);
    setColor();
  } else {
    createPixelBoard(n);
    setColor();
  }
}

const btnVQV = document.querySelector('#generate-board');
btnVQV.addEventListener('click', geraBoard);

//  Define a cor preta como pré-selecionada
function startColor() {
  const black = document.querySelector('.color');
  black.classList.add('selected');
}

startColor();

// Cria um botão que remove a cor de todos os pixels
function createButton() {
  const btnContainer = document.getElementById('button-container');
  const btnClear = document.createElement('button');
  btnClear.innerText = 'Limpar';
  btnClear.id = 'clear-board';
  btnClear.className = 'button-config';
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

createPixelBoard(5);
setColor();
