class Obstaculo {
    constructor(y){     
            this.y = y;
            this.x = 0;
            this.v = CONFIG.velocity;
            
            this.dist = random(100,400);
            this.x2 = this.dist+150;
           }
    draw(){
        fill("white");
         rect(this.x,this.y,this.dist,50)
         rect(this.x2,this.y,this.x2,50)       
    }
    
    update(){

        this.y+=this.v;

    }
    generar(){
        if(this.y >= 600){
            return(true)
        }else{
            return(false)
        }
    }

}