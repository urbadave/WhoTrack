var Encounter = require('./encounter');

class Tracker {
    constructor(){
        this.encounterList = [];
    }

    findEncounterIndex(encounter){
        if(encounter && encounter.name && encounter.date){
            return this.encounterList.findIndex(function(item){return item.equals(encounter);});
        }
        return -1;
    }

    addEncounter(encounter){
        const index = this.findEncounterIndex(encounter);
        if(index === -1){
            this.encounterList.push(encounter);
        }
    }

    removeEncounter(encounter){
        const index = this.findEncounterIndex(encounter);
        if(index !== -1){
            return this.encounterList.splice(index, 1); //return the encounters that were removed.
        }
        return null;
    }

    sortEncounters(){
        this.encounterList = this.encounterList.sort(Encounter.compare);
    }

    printAll(){
        this.encounterList.forEach(function(item){console.log(item.info);});
    }
}

let enc1 = new Encounter('Erin Johnson', new Date(2020, 5, 8), 'Dog groomer');
let enc2 = new Encounter('Mobile Small Engine Repair Guy', new Date(2020, 5, 8), 'Ken?');
let enc3 = new Encounter('Brandon Mauhar', new Date(2020, 4, 27));
let enc4 = new Encounter('Briane Evans', new Date(2020, 5, 3));
let enc5 = new Encounter('Brandon Mauhar', new Date(2020, 5, 4));

var trackerObj = new Tracker();
trackerObj.addEncounter(enc1);
trackerObj.addEncounter(enc1);
trackerObj.addEncounter(enc2);
trackerObj.addEncounter(enc3);
trackerObj.addEncounter(enc4);
trackerObj.addEncounter(enc5);

trackerObj.sortEncounters();

trackerObj.printAll();

console.log('remove one');
trackerObj.removeEncounter(enc3);
trackerObj.printAll();