import "server-only";
import LicensePlateRepository from "../repositories/liscence-plate";

class LicensePlateService {
  private repository: LicensePlateRepository;

  constructor() {
    this.repository = new LicensePlateRepository();
  }

  /**
   * Fetches license plate data after removing any dashes from the input.
   * @param licensePlate The license plate number, possibly containing dashes.
   * @returns A promise that resolves to the license plate data.
   */
  public async getLicensePlateData(licensePlate: string) {
    const sanitizedLicensePlate = licensePlate.replace(/-/g, "");

    try {
      const data = await this.repository.fetchLicensePlateData(sanitizedLicensePlate);
      return data;
    } catch (error) {
      console.error("Error in service layer:", error);
      throw error;
    }
  }
}
const liscencePlateService = new LicensePlateService();
export default liscencePlateService;
