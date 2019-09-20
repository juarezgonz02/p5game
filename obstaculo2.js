class Obstaculo2 {
    constructor(y){
            this.x = 300;
            this.y = y;
            this.dist = 
    }
    draw(){
        fill("white");
         rect(this.x,this.y,250,50)       
    }
    
    update(){

        this.y++

    }
    generar(){
        if(this.y == 600){
            return(true)
        }else{
            return(false)
        }
    }


}