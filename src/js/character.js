const allTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверный формат имени!');
    }

    if (!allTypes.includes(type)) {
      throw new Error('Неверный формат типа!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
