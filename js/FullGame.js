var FullGame = function(){
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.background = game.add.sprite(0,0, 'background');
    this.card = null;
    this.deckPlayer1 = new Deck_fire(1);
    this.deckPlayer2 = new Deck_fire(2);
    this.deckInGame = this.deckPlayer1;
    this.playerTurn = 1;
    this.state = 0;
    this.manaInGame = this.manaP1;
    this.manaP1 = 2;
    this.manaP2 = 2;
    this.timer = 0;
    
    this.debugRender = new Renderpositions();
    
    this.update = function() {
        
        this.timer ++;
        console.warn(this.state);
       switch(this.state){
                 //poner roba 7 cartas
            case 0:
                for(var i = 0; i < 5; i++){
                    this.deckPlayer1.repartir(1);
                }
                for(var i = 0; i < 5; i++){
                    this.deckPlayer2.repartir(2);
                }
                console.log("saliendo stado 0"); 
                
                this.state = 1;               
                break;
                
                //robar carta
            case 1:
                if(this.playerTurn == 1){
                    this.deckInGame = this.deckPlayer1;
                    this.manaInGame = this.manaP1;
                }else{
                    this.deckInGame = this.deckPlayer2;
                    this.manaInGame = this.manaP2;
                }
               if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.deckInGame.pickUpCard(this.playerTurn);
                    this.manaInGame ++;
                    console.log("saliendo stado 1");  
                    this.state = 2;
                }
               break;
                //colocar cartas
            case 2: 
                if(this.card != null){
                    if(this.deckInGame.checkMana(this.manaInGame,this.card) < 0){
                        console.log("whitout mana");
                        this.card = null;
                    }
                    else if(this.deckInGame.checkMana(this.manaInGame,this.card) >= 0){
                        this.deckInGame.putCardinGame(this.card,this.playerTurn);
                        this.manaInGame = this.deckInGame.checkMana(this.manaInGame,this.card);
                        this.card = null;
                    }
                    console.log("mana = "+ this.manaInGame); 
                }
                //si se pulsa la tecla up (despues se camibara por el click del raton) selecciona la carta deseada
                if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.card = this.deckInGame.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
                }
                else if (this.cursor.left.isDown){
                    console.log("saliendo stado 2");  
                    this.state = 3;
                }
               break;
                //atacar
               
            case 3:
               if (this.cursor.down.isDown && this.timer % 5 == 0){
                    console.log(this.atacantes);
               }
               
               if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.card = this.deckInGame.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
                    if(this.card != null){
                        this.atacantes = this.deckInGame.selectAtacantes(this.card);
                    }
                }
               
                break;
               
               
                //defender
            /*case 4:
                break;
                //calcuar vidas muertes etc...
            case 5:
                break;*/
               //cambiar de turno
            case 6:
               if(this.cursor.left.isDown && this.timer % 5){
                   console.log("cambiando turno");
                   if(this.playerTurn == 1) this.playerTurn = 2;
                   else if(this.playerTurn == 2) this.playerTurn = 1;
                   this.state = 1;
               }
               break;
        }
        
        
        
        
        
        /*//para mover la carta una vez seleccionada
        if(this.card != null){
            this.deck.setPosition(this.card);
        
        }
        //si se pulsa la tecla up (despues se camibara por el click del raton) selecciona la carta deseada
        if (this.cursor.up.isDown) {
            this.card = this.deck.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y); 
		}
        else if (this.cursor.down.isDown) {
            this.card = null;
		}
        console.log(this.card);*/
    };
    
}