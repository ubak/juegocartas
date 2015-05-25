var Dragon_shivano = function(){
    
    var atack = 5;
    var defensa = 5;
    var mana = 6;
    this.front = game.add.sprite(810,250, 'dragon_shivano');
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