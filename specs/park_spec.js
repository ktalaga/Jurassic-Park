const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('triceratops', 'omnivore', 30);
    dinosaur_3 = new Dinosaur('eoraptor', 'herbivore', 10);
    dinosaurs = [dinosaur_1, dinosaur_2, dinosaur_3];
    park = new Park('Jurassic Park', 25, dinosaurs);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.deepStrictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_1, dinosaur_2, dinosaur_3]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur_4 = new Dinosaur('pterodactyl', 'herbivore', 45);
    park.addDinosaur(dinosaur_4);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_1, dinosaur_2, dinosaur_3, dinosaur_4]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur_2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur_1, dinosaur_3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.findTotalVisitorsPerDay();
    assert.strictEqual(actual, 90);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.findTotalVisitorsPerYear();
    assert.strictEqual(actual, 32850);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.calculateTotalRevenueForYear();
    assert.strictEqual(actual, 821250);
  });

});
