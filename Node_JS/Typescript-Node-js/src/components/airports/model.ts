import axios from 'axios';
import config from '../../config/index';
const API = config.apiConfig.API_AVIONAPI;
class Airports {
  async getAirports(airportIdent: string) {
    const response = await axios.get(`${API}/airports?apt=${airportIdent}`);
    return response.data;
  }
}

export default new Airports();
