var Encounter = require('./encounter');



let encList = [];
encList.push(new Encounter('Brandon Mauhar', new Date(2020, 4, 27)));
encList.push(new Encounter('Briane Evans', new Date(2020, 5, 3)));
encList.push(new Encounter('Brandon Mauhar', new Date(2020, 5, 4)));
encList.push(new Encounter('Erin Johnson', new Date(2020, 5, 8), 'Dog groomer'));

encList.forEach(item => console.log(item.info));