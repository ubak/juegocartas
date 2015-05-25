var Deck_fire = function(){
    
    //var patrulla_de_trasgos = new Patrulla_de_trasgos();
    
    //creamos un mazo de 10 cartas
    this.deck = [];

    // rellenamos el mazo con los trasgos y dragones para hacer pruevas
    for (var i = 0; i < 20; i++){
        if(i % 2 == 0)this.deck[i] = new Patrulla_de_trasgos();
        else this.deck[i] = new Dragon_shivano();
        console.log(this.deck[i]);
    }
    
    //para cambiar la posicion de la carta seleccionada
    this.setPosition = function(card){
        this.deck[card].setPos(game.input.activePointer.x, game.input.activePointer.y);
        this.deck[card].swapImg();
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