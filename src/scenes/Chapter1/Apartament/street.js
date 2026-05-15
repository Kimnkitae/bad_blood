import Player from '../../../utils/player/player.js'
import NextText from '../../../utils/texts/nextText.js'
export default class BaseStreetScene extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    create() {
        this.house = this.physics.add.staticGroup()
        this.walls = this.physics.add.staticGroup()
        this.chairs = this.physics.add.staticGroup()
        this.trees = this.physics.add.staticGroup()
        
        this.walls.create(274, 374, 'C1AS1_bottom')
        this.walls.create(494, 200, 'C1AS1_right')
        this.walls.create(274, 26, 'C1AS1_top')
        this.walls.create(54, 200, 'C1AS1_left')
        
        this.trees.create(134, 102, 'C1AS1_trees')
        this.house.create(264, 350, 'C1AS1_house')
        this.chairs.create(149, 192, 'C1AS1_chair')

    }

    initPlayer(x, y) {
        
        const dialogueText = this.cache.json.get('chapter1Scene1')
        this.player = new Player(this, x, y)
        this.physics.add.collider(this.player.sprite, this.trees, () => {
            spaceBar.on('down', () => {
                this.text = new NextText(this, dialogueText.apartament.scene1.street[1].text, 100, 540, null)
            })
        })
        
        this.physics.add.collider(this.player.sprite, this.walls)
        this.physics.add.collider(this.player.sprite, this.chairs, () => {
            spaceBar.on('down', () => {
                this.text = new NextText(this, dialogueText.apartament.scene1.street[2].text, 100, 540, null)
            })
        })
        this.physics.add.collider(this.player.sprite, this.house, () => {
            spaceBar.on('down', () => {
                this.text = new NextText(this, dialogueText.apartament.scene1.street[3].text, 100, 540, 'Chapter1ApartamentScene3')
            })
        })
    }

    update() {
        if (this.player) this.player.update()
    }
}