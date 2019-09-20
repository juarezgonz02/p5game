
class Jugador{
    constructor(){
        this.x = width/2-20;
        this.direction = 2;
       this.a  = 0;
        this.y = height-100;
    }
    draw(){
        fill("white")
        
       rect(this.x,this.y,50,50)
    }
    update(){
        this.x +=this.direction;
     
    }
    moveD(){
        
        this.direction = 2 + this.a;
        
    }
    moveI(){
        this.direction = -2 + this.a;
    }
    
   }