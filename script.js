//  Adiciona cada cor na paleta de cores
function paletaCores(){
    let color = document.querySelectorAll(".color");

    for (let index = 0; index < color.length; index += 1){
        color[index].style.backgroundColor = geraRGB();
    }
}

paletaCores();

//  Gera uma cor aleatória
function geraRGB(){
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;

    if (color !== 'rgb(255,255,255)'){
        return color;
    }
}