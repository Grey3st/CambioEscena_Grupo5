class ButtonRestard{
    constructor(FinDelJuego){//Recibe como parametro la escena(FinDelJuego) es donde se creara el boton
        this.resetEscena = FinDelJuego;
    }
    preload(){
        this.resetEscena.load.image('boton1', '../public/img/restart.png')//sobre la escena se carga la imagen del boton
    }
    create(){
        /**a la propiedad starButton se le asigna una image precargada en resetEscena */
        /**setInteractive() le agrega interactividad con el usuario al elemento */
        this.startButton=this.resetEscena.add.image(400,450,'boton1').setInteractive();
        this.startButton.on('pointerdown', () => {
            this.resetEscena.scene.start('Escena1');
        })
        
    }
    
}

export default ButtonRestard;