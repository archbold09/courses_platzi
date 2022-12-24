import { faker } from '@faker-js/faker';

class Routes {
  routes: object;
  routesOfUsers: Array<object>;

  constructor() {
    this.routes = {};
    this.routesOfUsers = [];
    this.generate();
  }

  async generate() {
    const fs = require('fs');
    const mainPath = process.cwd();
    const fileMock = 'routes.json';
    const data = await fs.readFileSync(`${mainPath}/mockaroo/${fileMock}`, 'utf8');
    const routes = JSON.parse(data).map((item: object) => {
      return {
        id: faker.datatype.uuid(),
        ...item
      };
    });

    this.routes = routes;
  }

  addRouteOfUser(data: object) {
    this.routesOfUsers.push(data);
    return data;
  }
}

export default new Routes();
