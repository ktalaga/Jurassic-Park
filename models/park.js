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
//         visitors = dinosaur.guestsAttractedPerDay
        // const findLargest = function(visitors){
        //     for (let x=0; x<integers.length; x++) {  
        //         if (integers[x] > i) {     
        //         i = integers[x];
        //         }
        //     }
        //     console.log(i);
        //     }
        // }

       // console.log(visitors)
        
//     }

Park.prototype.findBySpecies = function(species){
    for (let dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
        return dinosaur;
        }

    }
}



Park.prototype.findTotalVisitorsPerDay = function(){
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay
    }return total;
    
}
Park.prototype.findTotalVisitorsPerYear = function(){
    let total = 0;
    for (let dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
        totalPerYear = total * 365
    }return totalPerYear
    
}
Park.prototype.calculateTotalRevenueForYear = function(){
    totalPerYear = park.findTotalVisitorsPerYear()
    let totalRevenue = totalPerYear * 25;
    return totalRevenue;
}





    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('triceratops', 'omnivore', 30);
    dinosaur_3 = new Dinosaur('eoraptor', 'herbivore', 10);
    dinosaur_4 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_5 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaurs = [dinosaur_1, dinosaur_2, dinosaur_3, dinosaur_4, dinosaur_5];
    park = new Park('Jurassic Park', 25, dinosaurs);
    // dinosaur_4 = new Dinosaur('pterodactyl', 'herbivore', 45);
    // park.addDinosaur(dinosaur_4);
    // console.log(park)


    // park.removeDinosaur(dinosaur_2);
    // console.log(park)

    // park.findMostPopular();

    // park.findTotalVisitorsPerDay();
    // park.findTotalVisitorsPerYear();
    // park.calculateTotalRevenueForYear();
    // park.findBySpecies('t-rex');



module.exports = Park;