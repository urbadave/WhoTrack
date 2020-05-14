module.exports = class Album{
    constructor(artist, name){
        this.artist = artist;
        this.name = name;
    }

    static loadJson(jsonSource){
        if(jsonSource){
            const source = JSON.parse(jsonSource);
            return new Album(source.artist, source.name);
        }
        return undefined;
    }

    static loadObj(objSource){
        if(objSource){
            return new Album(objSource.artist, objSource.name);
        }
        return undefined;
    }

    equals(other){
        if(!other) return false;

        if(this.artist === other.artist && this.name === other.name) return true;
    }

    static compare(one, other){
        if(!one && !other) return 0;
        if(!one) return -1;
        if(!other) return 1;

        if(!one.artist && other.artist) return -1;
        if(one.artist && !other.artist) return 1;
        if(one.artist !== other.artist) return one.artist.localeCompare(other.artist);

        if(!one.name && other.name) return -1;
        if(one.name && other.name) return 1;
        if(one.name !== other.name) return one.name.localeCompare(other.name);

        return 0;
    }

    consoleLog(){
        console.log(this.getString());
    }

    getString(){
        return`${this.artist}: ${this.name}`;
    }
}