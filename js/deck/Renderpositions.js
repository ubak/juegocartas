var Renderpositions = function(){
    
    var marker = game.add.graphics();
    

    //creamos un array de posiciones donde pueden aver cartas del palyer1
    this.handPositionsAviablesPlayer1 = [{x: 630, y: 620}, {x: 510, y: 620}, {x: 750, y: 620}, {x: 390, y: 620}, {x: 870, y: 620}, {x: 270, y: 620}, {x: 990, y: 620}, {x: 150, y: 620}, {x: 1110, y: 620}];
    //creamos un array de posiciones de las cartas en juego
    
    this.gamePositionsAviablesPlayer1 = [{x: 630, y: 450}, {x: 510, y: 450}, {x: 750, y: 450}, {x: 390, y: 450}, {x: 870, y: 450}, {x: 270, y: 450}, {x: 990, y: 450}, {x: 150, y: 450}, {x: 1110, y: 450}, {x: 30, y: 450}, {x: 1230, y: 450}];
    
//creamos un array de posiciones donde pueden aver cartas del palyer1
    this.handPositionsAviablesPlayer2 = [{x: 630, y: 10}, {x: 510, y: 10}, {x: 750, y: 10}, {x: 390, y: 10}, {x: 870, y: 10}, {x: 270, y: 10}, {x: 990, y: 10}, {x: 150, y: 10}, {x: 1110, y: 10}];
   
    this.gamePositionsAviablesPlayer2 = [{x: 630, y: 180}, {x: 510, y: 180}, {x: 750, y: 180}, {x: 390, y: 180}, {x: 870, y: 180}, {x: 270, y: 180}, {x: 990, y: 180}, {x: 150, y: 180}, {x: 1110, y: 180}, {x: 30, y: 180}, {x: 1230, y: 180}];
    
    
    //creamos la poscicion del mazo
    this.mazoPos = {x: 1370, y: 310};
    
    this.cementerioPlayer2 = {x: 1280, y: 30};
    this.cementerioPlayer1 = {x: 1280, y: 642};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    marker.lineStyle(2,0x00ff00,1);
    
    for (var i = 0; i< this.handPositionsAviablesPlayer1.length; i++){
        marker.drawRect(this.handPositionsAviablesPlayer1[i].x,this.handPositionsAviablesPlayer1[i].y,108,150);
    }
    
    for (var i = 0; i< this.gamePositionsAviablesPlayer1.length; i++){
        marker.drawRect(this.gamePositionsAviablesPlayer1[i].x,this.gamePositionsAviablesPlayer1[i].y,108,150);
    }
    
    marker.lineStyle(2,0xff0000,1);
    for (var i = 0; i< this.handPositionsAviablesPlayer2.length; i++){
        marker.drawRect(this.handPositionsAviablesPlayer2[i].x,this.handPositionsAviablesPlayer2[i].y,108,150);
    }
    
    for (var i = 0; i< this.gamePositionsAviablesPlayer2.length; i++){
        marker.drawRect(this.gamePositionsAviablesPlayer2[i].x,this.gamePositionsAviablesPlayer2[i].y,108,150);
    }
    
    marker.lineStyle(2,0x0000ff,1);
    marker.drawRect(this.mazoPos.x,this.mazoPos.y,108,150);
    
    marker.drawRect(this.cementerioPlayer1.x,this.cementerioPlayer1.y,150,108);
    marker.drawRect(this.cementerioPlayer2.x,this.cementerioPlayer2.y,150,108);
    
}