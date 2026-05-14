import Player from '../../../utils/player/player.js'

export default class BaseRoomScene extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    create() {
        this.add.image(500, 300, 'room')
        this.walls = this.physics.add.staticGroup()
        this.windows = this.physics.add.staticGroup()
        this.door = this.physics.add.staticGroup()
        this.bed = this.physics.add.staticGroup()

        this.walls.add(100, 100, 'C1AS4_bed')
        
    }

    initPlayer(x, y) {
        this.player = new Player(this, x, y)
        this.physics.add.collider(this.player.sprite, this.walls, () => {

        })

        this.physics.add.collider(this.player.sprite, this.windows, () => {

        })

        this.physics.add.collider(this.player.sprite, this.door, () => {

        })

        this.physics.add.collider(this.player.sprite, this.bed, () => {

        })
    }

    update() {
        if (this.player) this.player.update()
    }
}