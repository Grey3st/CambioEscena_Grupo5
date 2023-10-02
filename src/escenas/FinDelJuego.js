import ButtonRestard from "../../componentes/boton.js";//Traemos un componente que funciona como boton

class FinDelJuego extends Phaser.Scene{
    
    constructor(){
        super({key:'FinDelJuego'})
        this.ButtonRestard = new ButtonRestard(this);//objeto de ButtonRestard asignado a una propiedad de esta class(FinDelJuego), por el (this)
    }
    preload(){
     this.load.image('fondo',"../public/img/fondoInicio.png")
     this.load.image('fin',"../public/img/finJuego.png")
     this.ButtonRestard.preload();//Se llama al metodo preload() de ButtonRestard
    }
    
    create(){
        
        let fondo = this.add.image(0,0,'fondo');
        fondo.setOrigin(0,0);
   //--------//
   let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;
        //---//
       let fin = this.add.image(centerX,centerY,'fin');
       fin.setScale(0.2)
        console.log("Pal lobby malo *c rie en brazuca*")
        this.ButtonRestard.create();//Se llama al metodo create() de ButtonRestard
        
    }

}
export default FinDelJuego;