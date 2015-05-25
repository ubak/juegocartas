var Deck_fire = function(){
    
    //var patrulla_de_trasgos = new Patrulla_de_trasgos();
    
    //creamos un mazo de 10 cartas
    this.deck_1 = [20];

    // rellenamos el mazo con los trasgos para hacer pruevas
    for (var i = 1; i < 10; i++){
        this.deck_1[i] = new Patrulla_de_trasgos();   
    }
    
    //para cambiar la posicion de la carta seleccionada
    this.setPosition = function(card){
       this.card.setPos(game.input.activePointer.x, game.input.activePointer.y);
    }
    
    //para comprobar si el mouse esta encima de alguna de las cartaas
    this.checkMousePos = function(posX, posY){
        for(var j = 0; j < this.deck.length; j ++){
            if(posX >= this.deck_1[j].getPosX && posX <= this.deck_1[j].getPosX + 100 && posY >= this.deck_1[j].getPosY && posY <= this.deck_1[j].getPosY + 100){
                console.log("encontrado");
                return this.deck_1[j];
            }
        }   
    }
}