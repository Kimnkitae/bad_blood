import NextText from '../../../utils/texts/nextText.js'
import BaseStreetScene from './street.js'

export class Chapter1ApartamentScene1 extends BaseStreetScene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene1'})
    }

    preload() 
    {
        this.load.json('chapter1', 'assets/texts/chapter1.json')
    }

    create()
    {
        super.create()
        this.input.keyboard.removeAllListeners();
        this.add.image(150, 200, 'C1AS1_player-sleep')
        this.add.image(300, 600, 'placeholder')
        const dialogueText = this.cache.json.get('chapter1Scene1')
        this.text = new NextText(this, dialogueText.apartament.scene1.street[0].text, 100, 540, 'Chapter1ApartamentScene2')
    }  
}