import Magician from '../magician';

test('class of Magician', () => {
  const template = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const hero = new Magician('Magician');
  expect(template).toEqual(hero);
});
