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
        
        
    }  
}