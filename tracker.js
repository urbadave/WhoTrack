var Encounter = require('./encounter');

class Tracker {
    constructor(){
        this.encounterList = [];
    }

    addEncounter(encounter){
        if(encounter && encounter.name && encounter.date){
            var exists = this.encounterList.find(function(item){return item.equals(encounter);});
            if(!exists){
                this.encounterList.push(encounter);
            }
        }
    }

    sortEncounters(){
        this.encounterList = this.encounterList.sort(Encounter.compare);
    }

    printAll(){
        this.encounterList.forEach(function(item){console.log(item.info);});
    }
}

var trackerObj = new Tracker();
trackerObj.addEncounter(new Encounter('Erin Johnson', new Date(2020, 5, 8), 'Dog groomer'));
trackerObj.addEncounter(new Encounter('Brandon Mauhar', new Date(2020, 4, 27)));
trackerObj.addEncounter(new Encounter('Brandon Mauhar', new Date(2020, 4, 27)));
trackerObj.addEncounter(new Encounter('Briane Evans', new Date(2020, 5, 3)));
trackerObj.addEncounter(new Encounter('Brandon Mauhar', new Date(2020, 5, 4)));

trackerObj.sortEncounters();

trackerObj.printAll();