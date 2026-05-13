import NextText from '../../../utils/texts/nextText.js'
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
        /* physics */
        this.add.image(300, 600, 'placeholder')

        const theme1 = this.sound.play('theme', { loop: true}) 

        this.interactZones = this.physics.add.staticGroup()
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        const trigger = this.add.zone(264, 350, 410, 42)

        this.interactZones.add(trigger)
        this.checkHouse = this.physics.add.overlap(this.player.sprite, this.interactZones, () => {
            this.add.image(this.player.sprite.x, this.player.sprite.y-50, 'effect-e')
            spaceBar.on('down', () => {
                const dialogueText = this.cache.json.get('chapter1Scene1')
                this.text = new NextText(this, dialogueText.apartament.scene1[1].text, 100, 540, 'Chapter1ApartamentScene3')
            })
        })  
    } 
}