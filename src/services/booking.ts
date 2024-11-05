import bookingRepository from "../repositories/booking";
import { IBooking } from "../models/Booking";
import BookingConfirmationEmail from "../templates/booking";
import sendEmail from "./sendEmail";
import { packages as subscriptionPackages } from "../app/subscribe/data";
import { packages } from "../app/autocare/data";

class BookingService {
  async createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
    const price = this.calculatePrice(bookingData);
    // Ensure userId is included in the bookingData
    // if (!bookingData.userId) {
    //   throw new Error("User ID is required.");
    // }

    const newBooking = await bookingRepository.create({
      ...bookingData,
      price: price,
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

  async editBooking(id: string, bookingData: Partial<IBooking>): Promise<IBooking> {
    const booking = await bookingRepository.findById(id);
    if (!booking) {
      throw new Error("Booking not found");
    }

    Object.keys(bookingRepository).forEach((key) => {
      if (bookingData[key]) {
        booking[key] = bookingData[key];
      }
    });

    const appointment = new Date(bookingData.appointmentTimestamp);
    const price = this.calculatePrice(booking);

    await this.sendConfirmationEmail(
      booking.email,
      booking.firstName,
      booking.serviceName,
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
      `${booking.street}, ${booking.city}, ${booking.zipCode}`,
      price
    );

    await booking.save();

    return booking;
  }

  async getAllBookingsByUserId(userId: string): Promise<IBooking[]> {
    return await bookingRepository.findByUserId(userId);
  }

  calculatePrice(bookingData: Partial<IBooking>) {
    console.log(bookingData);
    let price: number = 0;

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

    price += parseFloat(pkg.price.replace("€", "").trim());
    if (bookingData.serviceName === "Subscription Plans") {
      if (bookingData.serviceAddons.addons?.length > 0) {
        bookingData.serviceAddons.addons.forEach((addon) => {
          const addonPrice = pkg.additionalOptions.find((a) => a.name === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          price += addonPrice;
        });
      }
    } else {
      if (bookingData.serviceAddons.addons?.length > 0) {
        bookingData.serviceAddons.addons.forEach((addon) => {
          const addonPrice =
            pkg.additionalOptions.interior.find((a) => a.name === addon)?.additionalCost ||
            pkg.additionalOptions.exterior.find((a) => a.name === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          price += addonPrice;
        });
      }
      if (bookingData.serviceAddons.detailing?.length > 0) {
        bookingData.serviceAddons.detailing.forEach((addon) => {
          const addonPrice = pkg.additionalOptions.detailing.find((a) => a.name === addon)?.additionalCost;

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

  async rescheduleBooking(id: string, dateTime: Date): Promise<IBooking | null> {
    const booking = await bookingRepository.reschedule(id, dateTime);
    if (!booking) {
      throw new Error("Booking not found");
    }

    return booking;
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
