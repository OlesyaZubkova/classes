import { Character } from '../character';

import {
  Bowerman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../classes';

describe('should show class data correctly', () => {
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
});

describe('should determine types correctly', () => {
  test('should check name', () => {
    expect(() => new Character('Z', 'Zombie')).toThrow(new Error('Неверный формат имени!'));
  });

  test('should check type', () => {
    expect(() => new Character('Undead', 'WrongType')).toThrow(new Error('Неверный формат типа!'));
  });
});
