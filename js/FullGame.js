var FullGame = function(){
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.background = game.add.sprite(0,0, 'background');
    this.card = null;
    this.deck = new Deck_fire();
    this.state = 0;
    this.mana = 2;
    this.timer = 0;
    
    this.debugRender = new Renderpositions();
    
    this.update = function() {
        
        this.timer ++;
        
       switch(this.state){
                 //poner roba 7 cartas
            case 0:
                for(var i = 0; i < 5; i++){
                    this.deck.repartir();
                }
                console.log("saliendo stado 1"); 
                
                this.state = 1;               
                break;
                
                //robar carta
            case 1:
                if (this.cursor.up.isDown) {
                    this.deck.pickUpCard();
                    this.mana ++;
                    console.log("saliendo stado 2");  
                    this.state = 2;
                    break;
                }
                //colocar cartas
            case 2: 
                if(this.card != null){
                    if(this.deck.checkMana(this.mana,this.card) < 0){
                        console.log("whitout mana");
                        this.card = null;
                    }
                    else if(this.deck.checkMana(this.mana,this.card) >= 0){
                        this.deck.putCardinGame(this.card);
                        this.mana = this.deck.checkMana(this.mana,this.card);
                        this.card = null;
                    }
                    console.log("mana = "+ this.mana); 
                }
                //si se pulsa la tecla up (despues se camibara por el click del raton) selecciona la carta deseada
                if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.card = this.deck.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
                }
                else if (this.cursor.left.isDown){
                    console.log("saliendo stado 3");  
                    this.state = 1;
                    break;
                }
                //atacar
           /* case 3:
                break;
                //defender
            case 4:
                break;
                //calcuar vidas muertes etc...
            case 5:
                break;*/
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