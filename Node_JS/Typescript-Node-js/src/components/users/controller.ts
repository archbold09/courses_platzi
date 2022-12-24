import { faker } from '@faker-js/faker';

class Users {
  users: Array<Object>;

  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    const array = [...new Array(limit)].map(() => {
      return {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        currentAirport: ['ALB', 'AND', 'AGO', 'AIA', 'ATA', 'ARG', 'ARM', 'AZE', 'BGD', 'BYS', 'BTN', 'BIH', 'GBD', 'BGR', 'BFA'][Math.floor(Math.random() * 14)]
      };
    });

    /* test */ /* correr socket para mostrar las suscripcioens de rutas de mis usuarios */
    array.push({
      id: '20d01a14-33ad-44f3-a9a3-ea35871d761dww',
      name: 'Angel Archbold',
      email: 'angel.archbold@gmail.com',
      currentAirport: 'ABE'
    });

    this.users = array;
  }
}

export default new Users();
