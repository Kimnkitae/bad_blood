
export default class NextText {
    constructor(scene, dialogueKey) {
        this.scene = scene
        this.dialogueKey = dialogueKey
        this.init()
    }

    init() {
        this.createText()
    }

    createText() {
        const spaceBar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        spaceBar.on('down', () => {
            console.log(this.dialogueKey.text[0])
        })
    }

    nextText() {

    }

    endText() {
        
    }
}




