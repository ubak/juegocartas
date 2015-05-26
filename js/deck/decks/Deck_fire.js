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
    
    this.pickUpCard = function (){
        var j;
        for(j = 0; j < this.deck.length; j ++){
            if(this.deck[j].getWhere() == 0){
                this.deck[j].setPos(this.debugRender.handPositionsAviablesPlayer1[j].x,this.debugRender.handPositionsAviablesPlayer1[j].y);
                this.deck[j].swapImg();
                this.deck[j].setWhere(1);
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
}