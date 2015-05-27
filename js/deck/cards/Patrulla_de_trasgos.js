var Patrulla_de_trasgos = function(player){

    this.debugRender = new Renderpositions();
    this.mazoInGame = {x: this.debugRender.mazoPos1.x, y: this.debugRender.mazoPos1.y} 
    if(player == 1){
        this.mazoInGame = {x: this.debugRender.mazoPos1.x, y: this.debugRender.mazoPos1.y + 108};
    }
    else if(player == 2){
        this.mazoInGame = {x: this.debugRender.mazoPos2.x, y: this.debugRender.mazoPos2.y +108}; 
    }
    
    var atack = 2;
    var defensa = 1;
    this.mana = 1;
    this.front = game.add.sprite(this.mazoInGame.x,this.mazoInGame.y, 'patrulla_de_trasgos');
    this.back = game.add.sprite(this.mazoInGame.x,this.mazoInGame.y, 'parteAtras');
    this.back.angle = -90;
    this.imagen = this.front;   
    this.imagen.angle = -90;
    this.where = 0; //0 = mazo 1 = mano 2 = en juego
    
 //   this.imagen.scale.setTo(0.15,0.15);

    
    //para cambiar posicion
    this.setPos = function(posiX,posiY){
        
        game.add.tween(this.imagen).to({x: posiX, y: posiY}, 500).start();
        if(this.imagen.angle == -90) game.add.tween(this.imagen).to({angle: 0},500).start();
        
        
       /* this.imagen.position.x = posiX;
        this.imagen.position.y = posiY;*/
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
    
    this.getMana = function(){
        return this.mana;
    }
    
};