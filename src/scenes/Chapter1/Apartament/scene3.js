import BaseApartamentScene from './apartament.js'

export class Chapter1ApartamentScene3 extends BaseApartamentScene {
    constructor() {
        super({ key: 'Chapter1ApartamentScene3'})
    }

    create() {
        super.create()
        super.initPlayer(510, 100)
    }

}