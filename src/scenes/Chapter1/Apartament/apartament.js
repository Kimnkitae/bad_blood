import Player from '../../../utils/player/player.js'

export default class BaseApartamentScene extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    create() {
        this.add.image(500, 300, 'apartament')
    }

    initPlayer(x, y) {
        this.player = new Player(this, x, y)
    }

    update() {
        if (this.player) this.player.update()
    }
}