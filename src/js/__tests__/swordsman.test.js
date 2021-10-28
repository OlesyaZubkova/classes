import Swordsman from '../swordsman';

test('class of Swordsman', () => {
  const template = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const hero = new Swordsman('Swordsman');
  expect(template).toEqual(hero);
});
