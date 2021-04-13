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
    assert.deepStrictEqual(actual, [dinosaur_1, dinosaur_2, dinosaur_3])
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
