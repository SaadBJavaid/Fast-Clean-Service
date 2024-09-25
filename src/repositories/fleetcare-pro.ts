import { FleetCarePro } from "../models/fleetcare-pro";
import { IFleetCarePro } from "../types/fleetcare-pro";

class FleetCareProRepository {
  static async createFleetCarePro(data: IFleetCarePro): Promise<void> {
    await FleetCarePro.create(data);
  }
}

export default FleetCareProRepository;
