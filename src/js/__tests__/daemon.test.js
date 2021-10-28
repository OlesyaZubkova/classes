import Daemon from '../daemon';

test('class of Daemon', () => {
  const template = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const hero = new Daemon('Daemon');
  expect(template).toEqual(hero);
});
