var FullGame = function(){
    
    this.cursor = game.input.keyboard.createCursorKeys();
    
    this.background = game.add.sprite(0,0, 'background');
    this.card = null;
    this.deckPlayer1 = new Deck_fire(1);
    this.deckPlayer2 = new Deck_fire(2);
    this.atacante = this.deckPlayer1;
    this.defensor = this.deckPlayer2;
    this.playerTurn = 1;
    this.state = 0;
    this.manaInGame = this.manaP1;
    this.manaP1 = 2;
    this.manaP2 = 2;
    this.timer = 0;
    this.boton = game.add.sprite(508,332, 'pasarTuro');
    
    this.debugRender = new Renderpositions();
    
    this.update = function() {
        
        this.timer ++;
        console.warn(this.state);
       switch(this.state){
                 //poner roba 7 cartas
            case 0:
                for(var i = 0; i < 5; i++){
                    this.atacante.repartir(1);
                }
                for(var i = 0; i < 5; i++){
                    this.defensor.repartir(2);
                }
                console.log("saliendo stado 0"); 
                
                this.state = 1;               
                break;
                
                //robar carta
            case 1:
                this.card == null;
                if(this.playerTurn == 1){
                    this.atacante = this.deckPlayer1;
                    this.defensor = this.deckPlayer2;
                    this.manaInGame = this.manaP1;
                }else{
                    this.atacante = this.deckPlayer2;
                    this.defensor = this.deckPlayer1;
                    this.manaInGame = this.manaP2;
                }
                if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.atacante.pickUpCard(this.playerTurn);
                    this.manaInGame ++;
                    console.log("saliendo stado 1");  
                    this.state = 2;
                }
               break;
                //colocar cartas
            case 2: 
                if(this.card != null){
                    if(this.atacante.checkMana(this.manaInGame,this.card) < 0){
                        console.log("whitout mana");
                        this.card = null;
                    }
                    else if(this.atacante.checkMana(this.manaInGame,this.card) >= 0){
                        this.atacante.putCardinGame(this.card,this.playerTurn);
                        this.manaInGame = this.atacante.checkMana(this.manaInGame,this.card);
                        this.card = null;
                    }
                    console.log("mana = "+ this.manaInGame); 
                }
                //si se pulsa la tecla up (despues se camibara por el click del raton) selecciona la carta deseada
                if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.card = this.atacante.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
                }
                else if (this.cursor.down.isDown && this.timer % 5){
                    console.log("saliendo stado 2");  
                    this.state = 3;
                }
               break;
                //atacar
               
            case 3:
               if (this.cursor.down.isDown && this.timer % 5 == 0){
                   console.log("saliendo stado 3");  
                   console.log(this.atacante.getDeck().length);
                   this.state = 4;
               }
               
               if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.card = this.atacante.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
                    if(this.card != null){
                        this.atacante.selectAtacantes(this.card);
                    }
                }
                break;
               
                //defender
            case 4:
                if (this.cursor.right.isDown && this.timer % 5 == 0){                   
                   console.log("saliendo stado 4");  
                   this.state = 5;
                }
               
                if (this.cursor.up.isDown && this.timer % 5 == 0) {
                    this.card = this.defensor.checkMousePos(game.input.mousePointer.x, game.input.mousePointer.y);
                    if(this.card != null){
                        this.defensor.selectAtacantes(this.card);
                    }
                }
                break;
                //calcuar vidas muertes etc...
            case 5:
                for(var a = 0; a < this.atacante.getDeck().length; a ++){    
                    if(this.atacante.chekIfAtack(a) == true){
                        for(var j = 0; j < this.defensor.getDeck().length; j ++){
                            if(this.defensor.chekIfAtack(j) == true){
                                //gana atacante
                                if(this.atacante.getCard(a).getAtack() >= this.defensor.getCard(j).getDefensa() && this.atacante.getCard(a).getDefensa() > this.defensor.getCard(j).getAtack()){
                                    this.defensor.getCard(j).setPos(10000,10000);
                                    console.warn("muere el defensor");
                                }
                                //gana defensor
                                else if(this.atacante.getCard(a).getAtack() < this.defensor.getCard(j).getDefensa() && this.atacante.getCard(a).getDefensa() <= this.defensor.getCard(j).getAtack()){
                                    this.atacantes.getCard(a).setPos(10000,10000);
                                    console.warn("muere el atacante");
                                }
                                //empate mueren los dos
                                else if(this.atacante.getCard(a).getAtack() >= this.defensor.getCard(j).getDefensa() && this.atacante.getCard(a).getDefensa() <= this.defensor.getCard(j).getAtack()){
                                    this.atacante.getCard(a).setPos(10000,10000);
                                    this.defensor.getCard(j).setPos(10000,10000);
                                    console.warn("mueren los dos");
                                }
                                //empate ninguno muere
                                else if(this.atacante.getCard(a).getAtack() < this.defensor.getCard(j).getDefensa() && this.atacante.getCard(a).getDefensa > this.defensor.getCard(j).getAtack()){
                                    console.warn("nadie muere");
                                }
                            }
                        }
                    }
                }
                this.state = 6;
               
                break;
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