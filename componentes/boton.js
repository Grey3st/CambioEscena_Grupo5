class ButtonRestard{
    constructor(FinDelJuego){
        this.resetEscena = FinDelJuego;
    }
    preload(){
        this.resetEscena.load.image('boton1', '../public/img/restart.png')//sobre la escena se carga la imagen del boton
    }
    create(){
        this.startButton=this.resetEscena.add.image(400,450,'boton1').setInteractive();
        this.startButton.on('pointerdown', () => {
            this.resetEscena.scene.start('Escena1');
        })
        
    }
    
}

export default ButtonRestard;