import ContactRepository from "../repositories/contact";
import { IContact } from "../types/contactForm";

class ContactService {
  static async submitContactForm(data: IContact): Promise<void> {
    //! add business logic before saving to the database
    //* - Check for spam
    // - Modify the data in some way

    // Check for spam
    if (this.isSpam(data.message)) {
      throw new Error("Spam detected");
    }

    //! - Send a confirmation email

    await ContactRepository.createContact(data);
  }

  private static isSpam(message: string): boolean {
    // Implement spam detection logic
    return false;
  }

  private static async sendConfirmationEmail(email: string): Promise<void> {
    // Implement email sending logic
  }
}

export default ContactService;
