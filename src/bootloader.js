export default class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key: 'bootloader'})
    }

    preload() {
        this.loadImages()
        this.loadSounds()
        this.loadTexts()
        this.loadPlayer()
        this.loadEffects()
    }

    loadImages() {
        this.load.image('C1AS1_street', 'assets/street/street.png')
        this.load.image('C1AS1_bottom', 'assets/street/bottom.png')
        this.load.image('C1AS1_right', 'assets/street/right.png')
        this.load.image('C1AS1_top', 'assets/street/top.png')
        this.load.image('C1AS1_left', 'assets/street/left.png')
        this.load.image('C1AS1_trees', 'assets/street/trees.png')
        this.load.image('C1AS1_house', 'assets/street/house.png')
        this.load.image('C1AS1_chair', 'assets/street/chair.png')
        this.load.image('C1AS1_player-sleep', 'assets/player/player-sleep.png')
        this.load.image('placeholder', 'assets/holder-text/holder-text.png')
        this.load.image('apartament', 'assets/apartament/apartament.png')
    }

    loadSounds() {
        this.load.audio('theme', 'assets/sounds/theme.wav', { loop: true})
    }

    loadTexts() {
        this.load.bitmapFont('W95FA', 'assets/fonts/W95FA.png', 'assets/fonts/W95FA.fnt')
        this.load.json('chapter1Scene1', "assets/texts/chapter1.json")
    }


    loadPlayer() {
        this.load.spritesheet('player', 'assets/player.png', {
            frameWidth: 46,
            frameHeight: 64,

        })
    }

    loadEffects() {
        this.load.image('effect-e', 'assets/effects/circle.png')
    }
    
    create() {
        this.scene.start('Chapter1ApartamentScene1')
    }
}