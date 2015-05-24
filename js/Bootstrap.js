var mainscreen = null;
var game = new Phaser.Game(
    1000, 
    680, 
    Phaser.AUTO, 
    '', 
    {         
        preload: function(){
            var load = new Load();
        },
        create: function() {
            mainscreen = new FullGame();
        },
        update: function() {
            if(mainscreen) {
                mainscreen.update();
            }
        }
    }
);