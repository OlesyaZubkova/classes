import Zombie from '../zombie';

test('class of Zombie', () => {
  const template = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const hero = new Zombie('Zombie');
  expect(template).toEqual(hero);
});
