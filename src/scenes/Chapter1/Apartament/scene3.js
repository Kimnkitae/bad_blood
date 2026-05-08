import Player from '../../../utils/player.js'

export class Chapter1ApartamentScene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene3'})
    }

    create() {
        this.add.image(500, 300, 'apartament')

        this.player = new Player(this, 100, 200)
    }

}