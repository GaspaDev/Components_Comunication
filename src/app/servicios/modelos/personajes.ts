export class character {
    id : number = 0
    name : string = ''
    birthday : string = ''
    occupation! : string[]
    img : string = ''
    status : string = ''
    nickname : string = ''
    appearance! : number[]
    portrayed : string = ''
    category! : string[]
    constructor(dato : character){
        if(dato){
            this.id = dato.id
            this.name = dato.name
            this.birthday = dato.birthday
            this.occupation = dato.occupation
            this.img = dato.img
            this.status = dato.status
            this.nickname = dato.nickname
            this.appearance = dato.appearance
            this.portrayed = dato.portrayed
            this.category = dato.category
        }
    }
}