import { Contact } from "../models/Contact";
import { IContact } from "../types/contactForm";

class ContactRepository {
  static async createContact(data: IContact): Promise<void> {
    await Contact.create(data);
  }
}

export default ContactRepository;
