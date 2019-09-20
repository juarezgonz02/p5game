let jugador;
let obstaculo = [];
let obstaculo2 = [];
let obstaculoI;
let CONFIG ;
function setup(){

    createCanvas(500, 600);
    angleMode(DEGREES);
    CONFIG = {
            velocity: 1,
            i: 0,
            puntaje: 0,
            between: -200,
            time: map(frameCount,0,60,0,3600),
            randomSed: -200,


    }
    
   
  
  
    jugador = new Jugador();  
    for(var i = 0; i<6; i++){
        CONFIG.randomSed += 200;
        obstaculo.push(new Obstaculo(CONFIG.randomSed))
        
            console.log(CONFIG.randomSed)

       
    }  
    
    

}
function draw(){
    acelerar()
    CONFIG.i++  
    CONFIG.time = round(map(CONFIG.i,0,3600,0,60))

    background("black");
    jugador.update();
    jugador.draw();

    obstaculo.forEach(obs => {
        obs.draw();
    });
  
    obstaculo.forEach(obs => {
        obs.update();
    });
  
    obstaculo.forEach(obs => {
        if(obs.generar()){
        
            obstaculo.unshift(new Obstaculo(obstaculo[0].y+CONFIG.between))
            obstaculo.pop();
            
         console.log("Posicion del Cubo más alto"+ obstaculo[0].y)
         console.log(" Espacion"+CONFIG.between)
         
        }
    });
   
    
    fill("gray")
    rect(0,0,width,50)
    fill("white")
    CONFIG.puntaje += 0.2;
    textSize(25);
    
    text(round(CONFIG.puntaje),200,30)
    text(CONFIG.time,300,30)

    if(jugador.x >= 450 || jugador.x <= 0 ){
        valiste();
    }
    obstaculo.forEach(obs => {
        if(collideRectRect(jugador.x,jugador.y,50,50,obs.x,obs.y,obs.dist,50)||collideRectRect(jugador.x,jugador.y,50,50,obs.x2,obs.y,obs.x2,50)){
            valiste();
        }});

    }
function acelerar(){
    switch(CONFIG.time){
        case 10: obstaculo.forEach(obs => {
           CONFIG.velocity = 2 ;
           obs.v = 2;
           CONFIG.between = -225;
        });
         
     break;
     case 25: obstaculo.forEach(obs => {
        CONFIG.velocity = 2.5 ;
        obs.v = 2.5;
    
     });
    }
    


}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        jugador.a = 0;
        jugador.moveI();
        
        
    }
    if (keyCode === RIGHT_ARROW) {
        jugador.a = 0;
        jugador.moveD();   
       
     
    }
    if( keyCode === SHIFT){
        jugador.a = 2.5;
        jugador.moveD();   
    }
    if(keyIsPressed === true && keyCode === CONTROL){
        jugador.a = -2.5;
        jugador.moveI();
    }
        
    if(keyCode === ENTER){
        jugador.x = 250;
        if(collideRectRect(jugador.x,jugador.y,50,50,obstaculo[5].x,obstaculo[5].y,obstaculo[5].dist,50)||collideRectRect(jugador.x,jugador.y,50,50,obstaculo[5].x2,obstaculo[5].y,obstaculo[5].x2,50)){
            obstaculo.unshift(new Obstaculo(obstaculo[0].y+CONFIG.between))
        
        obstaculo.pop()

        }
        
        loop();
    }
  }
