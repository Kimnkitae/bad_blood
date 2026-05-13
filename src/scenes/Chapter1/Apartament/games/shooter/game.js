

export class ShooterGame extends Phaser.Scene {
    constructor() {
        super({key: 'shooterGame'})
    }

    preload() {
        this.load.image('aim', 'assets/shooterGame/aim.png')
        this.load.image('wallsImage', 'assets/shooterGame/wallImg.png')
    }

    create() {
        this.timeSecond = 30

        this.textTime = this.add.text(300, 300, `${this.timeSecond}`)
        this.walls = this.physics.add.staticGroup()
        this.walls.create(624, 226, 'C1AS1_top')
        this.walls.create(844, 400, 'C1AS1_right')
        this.walls.create(404, 400, 'C1AS1_left')
        this.walls.create(624, 574, 'C1AS1_bottom')

        const WallsImage = this.add.image(622, 400, 'wallsImage')
        this.aim = this.physics.add.sprite(615, 400, 'aim')

        this.cursors = this.input.keyboard.createCursorKeys()

        
        this.physics.add.collider(this.aim, this.walls)
        this.score = 0
        
        
        const timer = this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.timeSecond--
                this.textTime.text = `${this.timeSecond}`
                if(this.timeSecond <= 1) {
                    console.log('Да пошел ты')
                    timer.paused = true
                }
            },
            callbackScope: this,
            repeat: 29
        })

        
    }

    

    update() {
        
        

        if(this.cursors.down.isDown) {
            this.aim.setVelocityY(100)
        }
        else if(this.cursors.up.isDown) {
            this.aim.setVelocityY(-100)
        }
        else if(this.cursors.left.isDown) {
            this.aim.setVelocityX(-100)
    
        }
        else if(this.cursors.right.isDown) {
            this.aim.setVelocityX(100)
    
        } else {
            this.aim.setVelocityX(0)
            this.aim.setVelocityY(0)
        }

        if(this.cursors.space.isDown) {
            this.cameras.main.shake(100, 0.005)
            this.score += 5
        }

    }
}