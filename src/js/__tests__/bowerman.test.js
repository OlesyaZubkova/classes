import Bowerman from '../bowerman';

test('class of Bowerman', () => {
  const template = {
    name: 'Bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const hero = new Bowerman('Bowerman');
  expect(template).toEqual(hero);
});
