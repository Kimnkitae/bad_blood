import BaseStreetScene from './street.js'

export class Chapter1ApartamentScene2 extends BaseStreetScene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene2'})
        
    }
    
    create()
    {
        super.create()
        this.initPlayer(150, 260)
        this.input.keyboard.removeAllListeners()
        this.add.image(300, 600, 'placeholder')
        const theme1 = this.sound.play('theme', { loop: true}) 

        /* const dialogueText = this.cache.json.get('chapter1Scene1')
        this.text = new NextText(this, dialogueText.apartament.scene1[1].text, 100, 540, 'Chapter1ApartamentScene3') */
           
    } 
}