// services/fleetCareProService.ts
import FleetCareProRepository from "../repositories/fleetcare-pro";
import { IFleetCarePro } from "../types/fleetcare-pro";

class FleetCareProService {
  static async submitFleetCareProForm(data: IFleetCarePro): Promise<void> {
    // Here you can add business logic before saving to the database
    // For example:
    // - Send a confirmation email
    // - Check for duplicate submissions
    // - Categorize the fleet based on size

    // For now, we'll just save the data
    await FleetCareProRepository.createFleetCarePro(data);
  }
}

export default FleetCareProService;
