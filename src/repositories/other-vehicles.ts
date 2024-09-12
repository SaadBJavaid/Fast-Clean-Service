import { OtherVehicles } from "../models/OtherVehicles";
import { IOtherVehicles } from "../types/other-vehicles";

class OtherVehiclesRepository {
  static async createBooking(data: IOtherVehicles): Promise<void> {
    await OtherVehicles.create(data);
  }
}

export default OtherVehiclesRepository;
