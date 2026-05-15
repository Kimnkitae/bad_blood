import BaseRoomScene from './room.js'

export class Chapter1ApartamentScene4 extends BaseRoomScene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene4'})
    }

    create() {
        super.create()
        super.initPlayer(450, 380)
        
    }
}