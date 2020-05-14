var Encounter = require('./encounter');
var Tracker = require('./tracker');

let enc1 = new Encounter('Erin Johnson', new Date(2020, 5, 8), 'Dog groomer');
let enc2 = new Encounter('Mobile Small Engine Repair Guy', new Date(2020, 5, 8), 'Ken?');
let enc3 = new Encounter('Brandon Mauhar', new Date(2020, 4, 27));
let enc4 = new Encounter('Briane Evans', new Date(2020, 5, 3));
let enc5 = new Encounter('Brandon Mauhar', new Date(2020, 5, 4));

var trackerObj = new Tracker();
var sourceJson = '{"encounterList":[{"name":"Brandon Mauhar","date":"2020-06-04T06:00:00.000Z"},{"name":"Briane Evans","date":"2020-06-03T06:00:00.000Z"},{"name":"Erin Johnson","date":"2020-06-08T06:00:00.000Z","other":"Dog groomer"},{"name":"Mobile Small Engine Repair Guy","date":"2020-06-08T06:00:00.000Z","other":"Ken?"}]}';
trackerObj.load(sourceJson);

trackerObj.sortEncounters();

trackerObj.printAll();
const names = trackerObj.allNames();
if(names){
    names.forEach(function(item){console.log(item)});
}

console.log('remove one');
trackerObj.removeEncounter(enc3);
trackerObj.printAll();

console.log(JSON.stringify(trackerObj));