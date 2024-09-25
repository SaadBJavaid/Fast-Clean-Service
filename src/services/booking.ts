// services/bookingService.ts
import bookingRepository from "../repositories/booking";
import {IBooking} from "../models/Booking";
import BookingConfirmationEmail from "../templates/booking";
// import { render } from "@react-email/components";
import sendEmail from "./sendEmail";
import {packages as subscriptionPackages} from "../app/subscribe/data";
import {packages} from "../app/autocare/data";

class BookingService {
  async createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
    await bookingRepository.create(bookingData);

    const appointment = new Date(bookingData.appointmentTimestamp);

    await this.sendConfirmationEmail(
      bookingData.email,
      bookingData.firstName,
      bookingData.serviceName,
      appointment.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      appointment.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      `${bookingData.street}, ${bookingData.city}, ${bookingData.zipCode}`,
      this.calculatePrice(bookingData)
    );
    return;
  }

  calculatePrice(bookingData: Partial<IBooking>) {
    let price: number = 0;

    let pkg;
    if (bookingData.serviceName === "Subscription Plans") {
      pkg = subscriptionPackages.find((pkg) => pkg.name === bookingData.packageName);
    } else {
      pkg = packages[String(bookingData.packageType.name).toLocaleLowerCase()]?.find(
        (pkg) => pkg.name === bookingData.packageName
      );
    }

    if (!pkg) {
      console.error("Booking Data:", bookingData);
      throw new Error("Package not found");
    }

    price += parseFloat(pkg.price.replace("€", "").trim());
    if (bookingData.serviceName === "Subscription Plans") {
      if (bookingData.serviceAddons.addons?.length > 0) {
        Object.values(bookingData.serviceAddons.addons).forEach((addon) => {
          const addonPrice = pkg.additionalOptions.find((a) => a.option === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          price += addonPrice;
        });
      }
    } else {
      if (bookingData.serviceAddons.addons?.length > 0) {
        Object.values(bookingData.serviceAddons.addons).forEach((addon) => {
          const addonPrice =
            pkg.additionalOptions.interior.find((a) => a.option === addon)?.additionalCost ||
            pkg.additionalOptions.exterior.find((a) => a.option === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          price += addonPrice;
        });
      }
      if (bookingData.serviceAddons.detailing?.length > 0) {
        Object.values(bookingData.serviceAddons.detailing).forEach((addon) => {
          const addonPrice = pkg.additionalOptions.detailing.find((a) => a.option === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          else if (addonPrice === "On Request") return;
          
          price += addonPrice;
        });
      }
    }


    return price;
  }

  async getBooking(id: string): Promise<IBooking | null> {
    return await bookingRepository.findById(id);
  }

  async getAllBookings(): Promise<IBooking[]> {
    return await bookingRepository.findAll();
  }

  async updateBooking(id: string, bookingData: Partial<IBooking>): Promise<IBooking | null> {
    return await bookingRepository.update(id, bookingData);
  }

  async deleteBooking(id: string): Promise<IBooking | null> {
    return await bookingRepository.delete(id);
  }

  private static isSpam(message: string): boolean {
    // Implement spam detection logic
    return false;
  }

  private async sendConfirmationEmail(
    email: string,
    name: any,
    packageName: any,
    date: any,
    time: any,
    location: any,
    price: any
  ): Promise<void> {
    sendEmail(
      {
        to: email, // Change to your recipient
        from: "fizoneechan@gmail.com", // Change to your verified sender
        subject: "Fast Clean Service - Booking Acknowledgement",
      },
      BookingConfirmationEmail,
      {
        name,
        packageName,
        date,
        time,
        location,
        price,
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

export default new BookingService();
