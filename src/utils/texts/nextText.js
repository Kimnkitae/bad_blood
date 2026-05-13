export default class NextText {
    constructor(scene, text, x, y, nextScene = null) {
        this.scene = scene
        this.text = text
        this.init(x,y, nextScene)
        this.currentIndex = 0
        
    }

    init(x, y, nextScene)
    {
        this.nextText(x,y, nextScene)
        
    }

    nextText(x,y, nextScene = null)
    {
        
        this.dialogue = this.scene.add.bitmapText(x, y, 'W95FA', this.text[this.currentIndex], 36)
        
        const spaceBar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        spaceBar.on('down', () => {
        if(this.text.length == this.currentIndex) {
            if(nextScene === null) {
            } else {
                this.scene.cameras.main.fade(1000, 0, 0, 0, false, (camera, progress) => {
                    if (progress === 1) { 
                        this.scene.scene.start(nextScene)
                    }
                })
            }
        } else {
            this.dialogue.setText(this.text[this.currentIndex])
            this.currentIndex++
            
        }

        this.events.on('shutdown', () => {
            this.input.keyboard.removeKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        });
       })
       
       
    }
}




