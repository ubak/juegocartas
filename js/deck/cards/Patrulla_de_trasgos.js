var Patrulla_de_trasgos = function(){
    this.debugRender = new Renderpositions();
    var atack = 2;
    var defensa = 1;
    var mana = 1;
    this.front = game.add.sprite(this.debugRender.mazoPos.x,this.debugRender.mazoPos.y, 'patrulla_de_trasgos');
    this.back = game.add.sprite(this.debugRender.mazoPos.x,this.debugRender.mazoPos.y, 'parteAtras');
    this.imagen = this.front;
    this.where = 0; //0 = mazo 1 = mano 2 = en juego
    
 //   this.imagen.scale.setTo(0.15,0.15);

    
    //para cambiar posicion
    this.setPos = function(posiX,posiY){
        this.imagen.position.x = posiX;
        this.imagen.position.y = posiY;
    }
        
    this.getWhere = function(){
        return this.where;
    }
    
    this.setWhere = function(num){
        this.where = num;
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
        console.log(this.imagen);
    }
    
};