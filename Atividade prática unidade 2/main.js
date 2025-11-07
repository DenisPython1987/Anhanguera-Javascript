//Aqui eu declaro as variáveis do programa
let figura1 = document.getElementById("figura1");
let figura2 = document.getElementById("figura2");
let contexto1 = figura1.getContext('2d');
let contexto2 = figura2.getContext('2d');
let indiceCor = 0;
var cores = ['#000', '#00f', '#33f', '#fff']
const raio = 30;
let a = 50;
let b = 50;
let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
let da = -2;
let db = -2;

//Aqui eu crio a primeira bolinha
function figura_1(){
    contexto1.beginPath();
    contexto1.arc(x, y, raio, 0, 2*Math.PI);
    contexto1.fillStyle = cores[indiceCor];
    contexto1.fill();
}

//Aqui eu crio a segunda bolinha
function figura_2(){
    contexto2.beginPath();    
    contexto2.arc(a, b, raio, 0, 2*Math.PI);
    contexto2.fillStyle = cores[indiceCor];
    contexto2.fill();
}

//Aqui eu crio a função principal
function atualizar(){
    contexto1.clearRect(0, 0, figura1.width, figura1.height);
    contexto2.clearRect(0, 0, figura2.width, figura2.height);

    //Aqui eu incremento as variáveis
    x += dx;
    y += dy;
    a += da;
    b += db;

    //Aqui eu faço as bolinha rebaterem nas paredes, sugerida pelo chat GPT
    if(x + raio > figura1.width || x - raio < 0) dx *= -1;
    if(y + raio > figura1.height || y - raio < 0) dy *= -1;
    if(a + raio > figura2.width || a - raio < 0) da *= -1;
    if(b + raio > figura2.height || b - raio < 0) db *= -1;

    //Aqui eu chamo as funções que desenham as bolinhas
    figura_1();
    figura_2();

    //Aqui eu altero as cores
    indiceCor = (indiceCor + 1) % cores.length;

    //Isso eu não sei o que faz, o chat GPT disse que o programa não funciona
    //sem isso
    requestAnimationFrame(atualizar);
}

//Aqui eu chamo a função principal.
atualizar();