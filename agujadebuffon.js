let Cuadro = 600 //tamaño del cuadro
let l_linea = 100 //longitud de la linea
let lineas = 0 //numero de lineas
let contenLinea = 0 //contador de lineas sobre lineas paralelas
let inputLineas
let buttonEjecutar

function setup() {
  // put setup code here
  createCanvas(Cuadro+200,Cuadro)
  noLoop()
  inputLineas = createInput(String(lineas))
  inputLineas.position(Cuadro+45,50)
  inputLineas.size(92)
  buttonEjecutar = createButton("Con este boton se ejectura generan los alfileres")
  buttonEjecutar.size(100)
  buttonEjecutar.position(Cuadro+45,80)
  buttonEjecutar.mousePressed(CambiaPantalla)

}

function CambiaPantalla(){
    loop()
    contenLinea = 0
    lineas = Number(inputLineas.value())
    noLoop()
  }

function draw() {
  // put drawing code here
  //este codigo estima el valor de PI
    background(255)
    fill(246,224,181)
    square(0,0,Cuadro)
    strokeWeight(3)
    line(0,l_linea,Cuadro,l_linea)
    line(0,l_linea*2,Cuadro,l_linea*2)
    line(0,l_linea*3,Cuadro,l_linea*3)
    line(0,l_linea*4,Cuadro,l_linea*4)
    line(0,l_linea*5,Cuadro,l_linea*5)
    generarLinea(lineas)
}


function generarLinea(lineas){
    for(let i = 0; i<lineas; i++){
        stroke(random(0,255),random(0,255),random(0,255))
        let x1 = random(0,Cuadro)
        let y1 = random(0,Cuadro)
        crearLinea(x1,y1)
      }
      stroke(0) //prar que no se cambien los colores del cuadro y líneas de referencia
}

function crearLinea(x1,y1){
    let x2 = random(-l_linea,l_linea)
    let y2 = sqrt((l_linea**2)-(x2**2))
    line(x1,y1,(x1+x2),(y1+y2))
    print(x2)
    print(y2)
    print(x1,y1,(x1+x2),(y1+y2))
}


