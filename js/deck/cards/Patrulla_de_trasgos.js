var Patrulla_de_trasgos = function(){
    
    var atack = 2;
    var defensa = 1;
    var mana = 1;
    var imagen = game.add.sprite(0,0, 'patrulla_de_trasgos');
    imagen.scale.setTo(0.15,0.15);

    
    //para cambiar posicion
    this.setPos = function(posiX,posiY){
        imagen.position.x = posiX;
        imagen.position.y = posiY;
        
    }
    
    //coger posicion X
    this.getPosX = function(){
        return imagen.position.x;   
    }
    
    //coger posicion Y
    this.getPosY = function(){
        return imagen.position.y;
    }
    
};