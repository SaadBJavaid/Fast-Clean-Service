import ContactRepository from "../repositories/contact";
import OtherVehiclesRepository from "../repositories/other-vehicles";
import { IOtherVehicles } from "../types/other-vehicles";

class OtherVehiclesService {
  static async submitBookingForm(data: IOtherVehicles): Promise<void> {
    // - Modify the data in some way

    //! - Send a confirmation email

    await OtherVehiclesRepository.createBooking(data);
  }

  private static isSpam(message: string): boolean {
    // Implement spam detection logic
    return false;
  }

  private static async sendConfirmationEmail(email: string): Promise<void> {
    // Implement email sending logic
  }
}

export default OtherVehiclesService;
