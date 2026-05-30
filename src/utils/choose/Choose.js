export default class Choose {
    constructor(scene, chooseKey) {
        this.scene = scene
        this.chooseKey = chooseKey
        this.init()
    }

    init() {
        this.isFirstSelected = true
        this.isSecondSelected = false
        this.firstChoiceScene = this.chooseKey.options[0].next_scene
        this.secondChoiceScene = this.chooseKey.options[1].next_scene
        this.chooseText = this.scene.add.bitmapText(65, 520, 'W95FA', this.chooseKey.question, 32)
        this.firstChoose = this.scene.add.bitmapText(120, 600, 'W95FA', this.chooseKey.options[0].text, 32)
        this.secondChoose = this.scene.add.bitmapText(240, 600, 'W95FA', this.chooseKey.options[1].text, 32)
        this.circleText = this.scene.add.image(100, 540, 'effect-e')
        

        this.selectFirst()
        this.cursors = this.scene.input.keyboard.createCursorKeys()
        this.spaceBar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        this.spaceBar.on('down', this.handleChoose, this)
    }

    update() {
        if(this.cursors.left.isDown) {
            this.selectFirst()
        }
        if(this.cursors.right.isDown) {
            this.selectSecond()
        }
    }

    selectFirst() {
        this.isFirstSelected = true
        this.isSecondSelected = false
        this.circleText.setPosition(100, 540)
        
    }

    selectSecond() {
        this.isFirstSelected = false
        this.isSecondSelected = true
        this.circleText.setPosition(300, 540)
        
    }

    handleChoose() {
        if(this.isFirstSelected && this.isSecondSelected === false) {
            this.scene.start(this.firstChoiceScene)
        }

        if(this.isFirstSelected === false && this.isSecondSelected) {
            this.scene.start(this.secondChoiceScene)
        }
    }

    
}