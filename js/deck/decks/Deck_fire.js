var Deck_fire = function(player){
    
    this.debugRender = new Renderpositions();
    //creamos un mazo de 10 cartas
    this.deck = [];
    this.atacantes = [];

    // rellenamos el mazo con los trasgos y dragones para hacer pruevas
    for (var i = 0; i < 20; i++){
        this.deck[i] = new Patrulla_de_trasgos(player);
        console.log(this.deck[i]);
    }
    
    //para cambiar la posicion de la carta seleccionada
    this.setPosition = function(card){
        this.deck[card].setPos(game.input.activePointer.x, game.input.activePointer.y);    
    }
    
    this.repartir = function(turn){
        
        for(var j = 0; j < this.deck.length; j ++){
            if(this.deck[j].getWhere() == 0){
                if(turn == 1)this.deck[j].setPos(this.debugRender.handPositionsAviablesPlayer1[j].x,this.debugRender.handPositionsAviablesPlayer1[j].y);
                else this.deck[j].setPos(this.debugRender.handPositionsAviablesPlayer2[j].x,this.debugRender.handPositionsAviablesPlayer2[j].y);
                this.deck[j].setWhere(1);
                this.deck[j].swapImg();
                break;
            }
        } 
    }
    
    this.pickUpCard = function (turn){
        this.handInGame = this.debugRender.handPositionsAviablesPlayer1;
        
        if(turn == 1) this.handInGame = this.debugRender.handPositionsAviablesPlayer1;
        else this.handInGame = this.debugRender.handPositionsAviablesPlayer2;
        
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
        
        for(j = 0; j < this.handInGame.length ;j++){
            for(var i = 0; i < this.deck.length; i++){
                if(this.handInGame[j].x == this.deck[i].getPosX() && this.handInGame[j].y == this.deck[i].getPosY()){
                    this.empty = false;
                    break;
                } else this.empty = true;
            }
            if(this.empty == true){ 
                console.log("entra");
                this.deck[this.card].setPos(this.handInGame[j].x,this.handInGame[j].y);
                break;
            }
        } 
    }
    
    this.putCardinGame = function(card,turn){
        this.gameInGame = this.debugRender.gamePositionsAviablesPlayer1;
        
        if(turn == 1) this.gameInGame = this.debugRender.gamePositionsAviablesPlayer1;
        else this.gameInGame = this.debugRender.gamePositionsAviablesPlayer2;
        
        this.empty = true;
        var j;
        
        for(j = 0; j < this.gameInGame.length ;j++){
            for(var i = 0; i < this.deck.length; i++){
                if(this.gameInGame[j].x == this.deck[i].getPosX() && this.gameInGame[j].y == this.deck[i].getPosY()){
                    this.empty = false;
                    break;
                } else this.empty = true;
            }
            if(this.empty == true){ 
                console.log("entra");
                this.deck[card].setPos(this.gameInGame[j].x,this.gameInGame[j].y);
                this.deck[card].setWhere(2);
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
    
    this.selectAtacantes = function (card){
        
        console.warn("carta: "+ this.deck[card]);
        
        if(this.deck[card] != null){
            if(this.deck[card].getWhere() == 2){
                console.warn("carta encontrada "+ card);
                this.deck[card].setWhere(3);
                this.atacantes.push(this.deck[card]);
            }
        }
        return this.atacantes;
    }
}