import BaseStreetScene from './street.js'

export class Chapter1ApartamentScene2 extends BaseStreetScene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene2'})
        
    }
    
    create()
    {
        this.input.keyboard.removeAllListeners()
        super.create()
        this.initPlayer(150, 260)
        this.add.image(300, 600, 'placeholder')
        const theme1 = this.sound.play('theme', { loop: true}) 
    } 
}