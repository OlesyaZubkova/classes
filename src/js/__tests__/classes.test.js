import Character from '../character';

describe('should determine types correctly', () => {
  test('should check name', () => {
    expect(() => new Character('Z', 'Zombie')).toThrow(new Error('Неверный формат имени!'));
  });

  test('should check type', () => {
    expect(() => new Character('Undead', 'WrongType')).toThrow(new Error('Неверный формат типа!'));
  });
});
