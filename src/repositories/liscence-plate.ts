import "server-only";
import axios from "axios";
import { LicensePlateData } from "../types/rdw";
import { RDW_API_URL } from "../constants";

class LicensePlateRepository {
  private baseUrl: string;

  constructor() {
    this.baseUrl = RDW_API_URL;
  }

  public async fetchLicensePlateData(licensePlate: string): Promise<LicensePlateData[]> {
    try {
      // ! TODO: REMOVE AXIOS
      const response = await axios.get<LicensePlateData[]>(this.baseUrl, {
        params: {
          kenteken: licensePlate,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching license plate data:", error);
      throw error;
    }
  }
}

export default LicensePlateRepository;
