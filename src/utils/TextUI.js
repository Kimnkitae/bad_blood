export default class TextUI {
    constructor(scene, text, x, y, nextScene = null) {
        this.scene = scene
        this.text = text
        this.init(x,y, nextScene)
        
    }

    init(x, y, nextScene)
    {
        this.nextText(x,y, nextScene)
        
    }

    nextText(x,y, nextScene = null) 
    {
        let currentIndex = 0
        this.dialogue = this.scene.add.text(x, y, this.text[currentIndex], { fontFamily: 'retganon', fonySize: 256,})
        const spaceBar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        spaceBar.on('down', () => {
        if(this.text.length == currentIndex) {
            if(nextScene === null) {

            } else {

                this.scene.scene.start(nextScene)
            }
        } else {
            this.dialogue = this.scene.add.text(x, y, this.text[currentIndex], { fontFamily: 'retganon', fonySize: 256,})
            currentIndex++
        }
       })
       
       
    }
}




