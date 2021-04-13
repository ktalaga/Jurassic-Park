const Dinosaur = require('../models/dinosaur.js');
const Park = function(name, ticket_price, dinosaurs){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

// Park.prototype.findMostPopular = function(){
//     for (let dinosaur of this.dinosaurs){
//         if (Math.max(dinosaur.guestsAttractedPerDay)){
//             console.log(dinosaur.guestsAttractedPerDay)
//         }
//     }
// }

Park.prototype.findTotalVisitorsPerDay = function(){
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay
    }return total;
    
}






    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('triceratops', 'omnivore', 30);
    dinosaur_3 = new Dinosaur('eoraptor', 'herbivore', 10);
    dinosaurs = [dinosaur_1, dinosaur_2, dinosaur_3];
    park = new Park('Jurassic Park', 25, dinosaurs);
    // dinosaur_4 = new Dinosaur('pterodactyl', 'herbivore', 45);
    // park.addDinosaur(dinosaur_4);
    // console.log(park)


    // park.removeDinosaur(dinosaur_2);
    // console.log(park)

    // park.findMostPopular();

    park.findTotalVisitorsPerDay();



module.exports = Park;