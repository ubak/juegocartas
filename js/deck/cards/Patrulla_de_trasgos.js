var Patrulla_de_trasgos = function(){
    
    var atack = 2;
    var defensa = 1;
    var mana = 1;
    this.front = game.add.sprite(810,250, 'patrulla_de_trasgos');
    this.back = game.add.sprite(810,250, 'parteAtras');
    this.imagen = this.back;
 //   this.imagen.scale.setTo(0.15,0.15);

    
    //para cambiar posicion
    this.setPos = function(posiX,posiY){
        this.imagen.position.x = posiX;
        this.imagen.position.y = posiY;
        
    }
    
    //coger posicion X
    this.getPosX = function(){
        return this.imagen.position.x;   
    }
    
    //coger posicion Y
    this.getPosY = function(){
        return this.imagen.position.y;
    }
    
    this.swapImg = function(){
        //if(this.imagen == this.front) this.imagen = this.back;
        this.imagen = this.front;
    }
    
};