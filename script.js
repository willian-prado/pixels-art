//  Adiciona cada cor na paleta de cores
function paletaCores() {
    let color = document.querySelectorAll(".color");
    color[0].style.backgroundColor = 'rgb(0, 0, 0)';
    for (let index = 1; index < color.length; index += 1) {
        color[index].style.backgroundColor = geraRGB();
    }
}

paletaCores();

//  Gera uma cor aleatória
function geraRGB() {
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;

    if (color !== 'rgb(255,255,255)') {
        return color; 
    }
}

//  Adiciona o quadro de pixels
let linhas = document.querySelectorAll('.linha');

function createPixelBoard(linhas){
    //let pixel = document.createElement('div');
    for (let i = 0; i < linhas.length; i += 1){
        console.log(linhas[i]);

        for (let j = 0; j < 5; j += 1){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            linhas[i].appendChild(pixel);
        }
    }
}

createPixelBoard(linhas);

//  Define a cor preta como pré-selecionada 