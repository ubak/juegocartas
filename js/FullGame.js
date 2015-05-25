var FullGame = function(){
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.background = game.add.sprite(0,0, 'background');
    this.card = null;
    this.deck = new Deck_fire();
    
    this.card = this.deck.deck_1[1];
    
    console.log(this.card);
    
    this.update = function() {
        
        //para mover la carta una vez seleccionada
        if(this.card != null) this.deck.setPosition(this.card);
        
        //prueva de que si se pulsa la tecla up (despues se camibara por el click del raton) selecciona la carta deseada
        if (this.cursor.up.isDown) {
            this.card = this.deck.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
		}
    };
    
}