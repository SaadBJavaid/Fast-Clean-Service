// services/fleetCareProService.ts
import FleetCareProRepository from "../repositories/fleetcare-pro";
import FleetCareConfirmationEmail from "../templates/fleetcare-pro";
import {IFleetCarePro} from "../types/fleetcare-pro";
import sendEmail from "./sendEmail";

class FleetCareProService {
  static async submitFleetCareProForm(data: IFleetCarePro): Promise<void> {
    await FleetCareProRepository.createFleetCarePro(data);

    FleetCareProService.sendConfirmationEmail(
      data.name,
      data.businessName,
      data.email,
      data.vehicleType,
      data.address,
      data.fleetSize
    );

    return;
  }

  static async sendConfirmationEmail(
    name: string,
    bussinessName: string,
    email: string,
    vehicleType: string,
    location: string,
    fleetSize: string
  ): Promise<void> {
    sendEmail(
      {
        to: email, // Change to your recipient
        from: "fizoneechan@gmail.com", // Change to your verified sender
        subject: "Fast Clean Service - Booking Acknowledgement",
      },
      FleetCareConfirmationEmail,
      {
        name,
        bussinessName,
        email,
        vehicleType,
        location,
        fleetSize,
      }
    )
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}


export default FleetCareProService;
