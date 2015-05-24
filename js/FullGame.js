var FullGame = function(){
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    background = game.add.sprite(0,0, 'background');
    var card = null;
    var deck = new Deck_fire();
    
    this.update = function() {
        
        //para mover la carta una vez seleccionada
        if(card != null) deck.setPosition(card);
        
        //prueva de que si se pulsa la tecla up (despues se camibara por el click del raton) selecciona la carta deseada
        if (this.cursor.up.isDown) {
            card = deck.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
		}
    };
    
}