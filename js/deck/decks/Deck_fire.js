var Deck_fire = function(){
    
    this.debugRender = new Renderpositions();
    //creamos un mazo de 10 cartas
    this.deck = [];

    // rellenamos el mazo con los trasgos y dragones para hacer pruevas
    for (var i = 0; i < 20; i++){
        this.deck[i] = new Patrulla_de_trasgos();
        console.log(this.deck[i]);
    }
    
    //para cambiar la posicion de la carta seleccionada
    this.setPosition = function(card){
        this.deck[card].setPos(game.input.activePointer.x, game.input.activePointer.y);    
    }
    
    this.repartir = function(){
        for(var j = 0; j < this.deck.length; j ++){
            if(this.deck[j].getWhere() == 0){
                this.deck[j].setPos(this.debugRender.handPositionsAviablesPlayer1[j].x,this.debugRender.handPositionsAviablesPlayer1[j].y);
                this.deck[j].setWhere(1);
                this.deck[j].swapImg();
                break;
            }
        } 
    }
    
    this.pickUpCard = function (){
        var j;
        var x;
        this.empty = true;
        this.card;
        
        for(x = 0; x < this.deck.length; x++){
            if(this.deck[x].getWhere() == 0){
                this.card = x;
                this.deck[this.card].setWhere(1);
                console.log("carta"+this.card);
                break;
            }
        }
        
        for(j = 0; j < this.debugRender.handPositionsAviablesPlayer1.length ;j++){
            for(var i = 0; i < this.deck.length; i++){
                if(this.debugRender.handPositionsAviablesPlayer1[j].x == this.deck[i].getPosX() && this.debugRender.handPositionsAviablesPlayer1[j].y == this.deck[i].getPosY()){
                    this.empty = false;
                    break;
                } else this.empty = true;
            }
            if(this.empty == true){ 
                console.log("entra");
                this.deck[this.card].setPos(this.debugRender.handPositionsAviablesPlayer1[j].x,this.debugRender.handPositionsAviablesPlayer1[j].y);
                break;
            }
        } 
    }
    
    this.putCardinGame = function(card){
        this.empty = true;
        var j;
        
        for(j = 0; j < this.debugRender.gamePositionsAviablesPlayer1.length ;j++){
            for(var i = 0; i < this.deck.length; i++){
                if(this.debugRender.gamePositionsAviablesPlayer1[j].x == this.deck[i].getPosX() && this.debugRender.gamePositionsAviablesPlayer1[j].y == this.deck[i].getPosY()){
                    this.empty = false;
                    break;
                } else this.empty = true;
            }
            if(this.empty == true){ 
                console.log("entra");
                this.deck[card].setPos(this.debugRender.gamePositionsAviablesPlayer1[j].x,this.debugRender.gamePositionsAviablesPlayer1[j].y);
                break;
            }
        }
        
    }
    
    //para comprobar si el mouse esta encima de alguna de las cartaas
    this.checkMousePos = function(posX, posY){
                
        for(var j = 0; j < this.deck.length; j ++){
            if(posX >= this.deck[j].getPosX() && posX <= this.deck[j].getPosX() + 130 && posY >= this.deck[j].getPosY() && posY <= this.deck[j].getPosY() + 180){
                console.log("encontrado");
                return j;
            }
        }   
    }
    
    this.checkMana = function(mana,card){
        return (mana - this.deck[card].getMana());
    }
}