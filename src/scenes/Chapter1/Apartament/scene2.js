import Player from '../../../utils/player.js'
import TextUI from '../../../utils/TextUI.js'

export class Chapter1ApartamentScene2 extends Phaser.Scene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene2'})
        
    }
    
    preload() 
    {
        
    }

    create()
    {
        /* physics */
        this.house = this.physics.add.staticGroup()
        this.walls = this.physics.add.staticGroup()
        this.chairs = this.physics.add.staticGroup()
        this.trees = this.physics.add.staticGroup()
        this.house.create(264, 350, 'C1AS1_house')
        this.trees.create(134, 102, 'C1AS1_trees')
        this.walls.create(274, 26, 'C1AS1_top')
        this.walls.create(494, 200, 'C1AS1_right')
        this.walls.create(54, 200, 'C1AS1_left')
        this.walls.create(274, 374, 'C1AS1_bottom')
        this.chairs.create(149, 192, 'C1AS1_chair')
        this.add.image(300, 600, 'placeholder')

        /*  effects */
        
        

        /* sound */
        /* this.sound.play('theme', { loop: true}) */
        /* player */
        this.player = new Player(this, 150, 260)
        this.effectE = null
        /* collider */
        this.interactZones = this.physics.add.staticGroup()
        
        this.physics.add.collider(this.player.sprite, this.trees)
        this.physics.add.collider(this.player.sprite, this.walls)
        this.physics.add.collider(this.player.sprite, this.chairs)
        this.physics.add.collider(this.player.sprite, this.house)
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        
        

        const trigger = this.add.zone(264, 350, 410, 42)
        this.interactZones.add(trigger)
        this.checkHouse = this.physics.add.overlap(this.player.sprite, this.interactZones, () => {
            this.effectE = this.add.image(this.player.sprite.x, this.player.sprite.y-50, 'effect-e')
            spaceBar.on('down', () => {
                const dialogueText = this.cache.json.get('chapter1Scene1')
                this.text = new TextUI(this, dialogueText.apartament.scene1[1].text, 100, 540, 'Chapter1ApartamentScene3')
            })
            
            

        })


        
        
    } 
    
    update()
    {
        
        /* collide */
        
        this.player.update()
        
    }
    
    
}