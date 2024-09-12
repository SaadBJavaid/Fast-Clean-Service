import sgMail from "../lib/sgMail";
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

    await ContactRepository.createContact(data);

    //! - Send a confirmation email
    this.sendConfirmationEmail(data.email);
  }

  private static isSpam(message: string): boolean {
    // Implement spam detection logic
    return false;
  }

  private static async sendConfirmationEmail(email: string): Promise<void> {
    sgMail
      .send({
        to: email, // Change to your recipient
        from: "fizoneechan@gmail.com", // Change to your verified sender
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
      })
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default ContactService;
