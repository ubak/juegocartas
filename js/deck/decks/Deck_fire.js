var Deck_fire = function(){
    
    var patrulla_de_trasgos = new Patrulla_de_trasgos();
    
    //creamos un mazo de 10 cartas
    var deck = [10];

    // rellenamos el mazo con los trasgos para hacer pruevas
    for (var i = 1; i < 10; i++){
        deck[i] = patrulla_de_trasgos;
    }

    //para cambiar la posicion de la carta seleccionada
    this.setPosition = function(card){
       deck[card].setPos(game.input.activePointer.x, game.input.activePointer.y);
    }
    
    //para comprobar si el mouse esta encima de alguna de las cartaas
    this.checkMousePos = function(posX, posY){
        for(var j = 0; j < deck.length; j ++){
            if(posX >= deck[j].getPosX && posX <= deck[j].getPosX + 100 && posY >= deck[j].getPosY && posY <= deck[j].getPosY + 100){
                console.log("encontrado");
                return deck[j];
            }
        }   
    }
}