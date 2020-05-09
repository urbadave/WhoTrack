module.exports = class Encounter {
    constructor(name, date, other) {
        this.name = name;
        this.date = date;
        this.other = other;        
    }

    get info() {
        return this.getString();
    }

    getString() {
        const hasDate = (this.date && this.date.toDateString);
        const hasOther = this.other;

        if(hasDate && hasOther){
            return `${this.date.toDateString()}: ${this.name}. ${this.other}`;
        } else if (hasDate){
            return `${this.date.toDateString()}: ${this.name}`;
        } else if (hasOther){
            return `No Date: ${this.name}. ${this.other}`;
        } else {
            return `No Date: ${this.name}`;
        }
    };
}