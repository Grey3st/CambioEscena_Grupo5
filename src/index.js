import Escena1 from "./escenas/Escena1.js" // importar cada escena para poder utilizarla en el array
import FinDelJuego from "./escenas/FinDelJuego.js"; // escena fin del juego al tocar bomba 
import InicioJuego from "./escenas/InicioJuego.js";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },

    scene: [InicioJuego,Escena1,FinDelJuego]      // cargar las escenas que se mostraran en el juego 
};

let game = new Phaser.Game(config);

