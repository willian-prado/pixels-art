//  Adiciona cada cor na paleta de cores
function paletaCores() {
    let color = document.querySelectorAll(".color");
    color[0].style.backgroundColor = "black";
    for (let index = 1; index < color.length; index += 1) {
        color[index].style.backgroundColor = geraRGB();
    }
}

paletaCores();

//  Gera uma cor aleatória
function geraRGB(){
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;

    if (color !== 'rgb(255,255,255)'){
        return color;
    }
}