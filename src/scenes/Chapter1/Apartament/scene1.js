import TextUI from '../../../utils/TextUI.js'

export class Chapter1ApartamentScene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene1'})
    }

    preload() 
    {
        this.load.json('chapter1', 'assets/texts/chapter1.json')
    }

    create()
    {
        /* images */
        this.add.image(500, 200, 'C1AS1_street')
        this.add.image(274, 374, 'C1AS1_bottom')
        this.add.image(494, 200, 'C1AS1_right')
        this.add.image(274, 26, 'C1AS1_top')
        this.add.image(54, 200, 'C1AS1_left')
        this.add.image(134, 102, 'C1AS1_trees')
        this.add.image(264, 350, 'C1AS1_house')
        this.add.image(149, 192, 'C1AS1_chair')
        this.add.image(150, 200, 'C1AS1_player-sleep')
        this.add.image(300, 600, 'placeholder')

        

        /* text */
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        
        
        const dialogueText = this.cache.json.get('chapter1Scene1')
        this.text = new TextUI(this, dialogueText.apartament.scene1[0].text, 100, 540, 'Chapter1ApartamentScene2')
        
    }  

    
    update()
    {
        
        
     
    }
    
    
}