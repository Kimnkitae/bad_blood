export default class Player {
    constructor(scene, x, y) {
        this.scene = scene
        this.label = 'player'
        this.init(x, y) 
    }

    init(x, y) {
        this.sprite = this.scene.physics.add.sprite(x, y, 'player')
        this.addAnimations()
        this.addMovements()
    }

    addAnimations() {
        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers(this.label, { start: 1, end: 3}),
            frameRate: 3,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'up',
            frames: this.scene.anims.generateFrameNumbers(this.label, { start: 7, end: 7}),
            frameRate: 3,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers(this.label, { start: 4, end: 6}),
            frameRate: 3,
            repeat: -1
        })
        this.scene.anims.create({
            key: 'down',
            frames: this.scene.anims.generateFrameNumbers(this.label, { start: 0, end: 0}),
            frameRate: 3,
            repeat: -1
        })
    }

    addMovements() {
        this.cursors = this.scene.input.keyboard.createCursorKeys()
    }

    update() {
        
        if(this.cursors.down.isDown) {
            this.sprite.setVelocityY(70)
            this.sprite.anims.play('down', true)
        }
        else if(this.cursors.up.isDown) {
            this.sprite.setVelocityY(-70)
             this.sprite.anims.play('up', true)
        }
        else if(this.cursors.left.isDown) {
            this.sprite.setVelocityX(-70)
             this.sprite.anims.play('left', true)
        }
        else if(this.cursors.right.isDown) {
            this.sprite.setVelocityX(70)
            this.sprite.anims.play('right', true)
        } else {
            this.sprite.setVelocityX(0)
            this.sprite.setVelocityY(0)
            this.sprite.anims.play('down', true)
        }
    }
}