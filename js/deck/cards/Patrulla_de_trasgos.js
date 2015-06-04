var Patrulla_de_trasgos = function(player){

    this.debugRender = new Renderpositions();
    this.mazoInGame = {x: this.debugRender.mazoPos1.x, y: this.debugRender.mazoPos1.y} 
    if(player == 1){
        this.mazoInGame = {x: this.debugRender.mazoPos1.x, y: this.debugRender.mazoPos1.y + 108};
    }
    else if(player == 2){
        this.mazoInGame = {x: this.debugRender.mazoPos2.x, y: this.debugRender.mazoPos2.y +108}; 
    }
    
    this.atack = 2;
    this.defensa = 1;
    this.mana = 1;
    this.front = game.add.sprite(this.mazoInGame.x,this.mazoInGame.y, 'patrulla_de_trasgos');
    this.front_sel = game.add.sprite(this.mazoInGame.x,this.mazoInGame.y, 'patrulla_de_trasgos_sel');
    this.back = game.add.sprite(this.mazoInGame.x,this.mazoInGame.y, 'parteAtras');
    this.back.angle = -90;
    this.front_sel.angle = -90;
    this.imagen = this.front;   
    this.imagen.angle = -90;
    this.where = 0; //0 = mazo 1 = mano 2 = en juego 3 = atacando = 4 defendiendo 5 = en reload
    
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
        if(num == 3){
            this.imagen = this.front_sel;
            console.log("imagen seleccion");
        }
        else if(num == 0){
            this.imagen = this.back;
            console.log("imagen atras");
        }
        else {
            this.imagen = this.front;
            console.log("imagen front");
        }
    }
    
    //coger posicion X
    this.getPosX = function(){
        return this.imagen.position.x;   
    }
    
    //coger posicion Y
    this.getPosY = function(){
        return this.imagen.position.y;
    }
    
   /* this.swapImg = function(){
        this.imagen = this.front;
        console.log(this.imagen);
    }
    */
    this.getMana = function(){
        return this.mana;
    }
    
    this.getAtack = function(){
        return this.atack;
    }
    
    this.getDefensa = function(){
        return this.defensa;
    }
    
};