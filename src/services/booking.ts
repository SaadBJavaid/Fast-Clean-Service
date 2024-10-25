import bookingRepository from "../repositories/booking";
import { IBooking } from "../models/Booking";
import BookingConfirmationEmail from "../templates/booking";
import sendEmail from "./sendEmail";
import { packages as subscriptionPackages } from "../app/subscribe/data";
import { packages } from "../app/autocare/data";

class BookingService {
  async createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
    const { price, duration } = this.calculatePrice(bookingData);
    // Ensure userId is included in the bookingData
    // if (!bookingData.userId) {
    //   throw new Error("User ID is required.");
    // }

    const newBooking = await bookingRepository.create({
      ...bookingData,
      price,
      duration
    });

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
      price
    );

    return newBooking;
  }

  async getAllBookingsByUserId(userId: string): Promise<IBooking[]> {
    return await bookingRepository.findByUserId(userId);
  }
  parseHighestDuration(durationStr: string): number {
    // Remove all non-numeric and non-slash characters
    const cleaned = durationStr.replace(/[^\d/]/g, "");

    // Split on slash if exists, otherwise use the single number
    const numbers = cleaned.split("/").map(Number);

    // For strings like "90~120", the split will result in a single string "90120"
    // So we need to handle this case by splitting the string into chunks of 2-3 digits
    if (numbers.length === 1 && cleaned.length > 3) {
      const matches = cleaned.match(/\d{2,3}/g) || [];
      return Math.max(...matches.map(Number));
    }

    return Math.max(...numbers);
  }

  calculatePrice(bookingData: Partial<IBooking>) {
    console.log(bookingData);
    let price: number = 0;
    let duration: number = 0;

    let pkg;
    if (bookingData.serviceName === "Subscription Plans") {
      pkg = subscriptionPackages.find((pkg) => pkg.name === bookingData.packageName);
    } else {
      pkg = packages[bookingData?.packageType?.toLowerCase()]?.find((pkg) => pkg.name === bookingData.packageName);
    }

    if (!pkg) {
      console.log("Booking Data:", bookingData);
      throw new Error("Package not found");
    }

    const carType = bookingData.vehicleType;
    price += pkg.vehicleOptions[carType].additionalPrice;
    price += pkg.vehicleOptions[carType].additionalTime;

    price += parseFloat(pkg.price.replace("€", "").trim());
    duration += this.parseHighestDuration(pkg.duration);

    if (bookingData.serviceName === "Subscription Plans") {
      if (bookingData.serviceAddons.addons?.length > 0) {
        bookingData.serviceAddons.addons.forEach((addon) => {
          const _addon = pkg.additionalOptions.find((a) => a.name === addon);
          const addonPrice = _addon?.additionalCost;
          const addonDuration = _addon?.additionalTime;

          if (!addonPrice || addonDuration === undefined) throw new Error("Addon not found");
          price += addonPrice;
          duration += addonDuration;
        });
      }
    } else {
      if (bookingData.serviceAddons.addons?.length > 0) {
        bookingData.serviceAddons.addons.forEach((addon) => {
          const addonPrice =
            pkg.additionalOptions.interior.find((a) => a.name === addon)?.additionalCost ||
            pkg.additionalOptions.exterior.find((a) => a.name === addon)?.additionalCost;
          const addonDuration =
            pkg.additionalOptions.interior.find((a) => a.name === addon)?.additionalTime ||
            pkg.additionalOptions.exterior.find((a) => a.name === addon)?.additionalTime;

          if (!addonPrice || addonDuration === undefined) throw new Error("Addon not found");
          price += addonPrice;
          duration += addonDuration;
        });
      }

      // Detailing exists only for autocare and doesn't have extra duration
      if (bookingData.serviceAddons.detailing?.length > 0) {
        bookingData.serviceAddons.detailing.forEach((addon) => {
          const addonPrice = pkg.additionalOptions.detailing.find((a) => a.name === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          else if (addonPrice === "On Request") return;

          price += addonPrice;
        });
      }
    }

    return { price, duration };
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
        to: email,
        from: "fizoneechan@gmail.com",
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

const bookingService = new BookingService();
export default bookingService;
