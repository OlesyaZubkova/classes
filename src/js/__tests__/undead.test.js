import Undead from '../undead';

test('class of Undead', () => {
  const template = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const hero = new Undead('Undead');
  expect(template).toEqual(hero);
});
