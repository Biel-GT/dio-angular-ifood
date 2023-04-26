
class Pokemon {
    id;
    name;
    type;
    types = [];
    photo;

    constructor (id, name, type, types, photo) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.types = types;
        this.photo = photo;
    }
}