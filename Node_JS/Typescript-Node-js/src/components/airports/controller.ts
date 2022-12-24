import AirportsModel from './model';
class Airports {
  async getAirports(airportIdent: string) {
    try {
      const response = await AirportsModel.getAirports(airportIdent);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default new Airports();
