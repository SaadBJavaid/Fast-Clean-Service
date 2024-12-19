import { AutocareServiceRepository } from "../repositories/autocare-package";
import { carServiceValidation, serviceOptionsValidation } from "../types/autocare-package";

class AutocareServiceService {
  private repository: AutocareServiceRepository;

  constructor() {
    this.repository = new AutocareServiceRepository();
  }

  async getAllServices() {
    return await this.repository.findAll();
  }

  async getServiceById(id: string) {
    return await this.repository.findById(id);
  }

  async createService(data: any) {
    console.log("data", data);
    const validatedPackages = carServiceValidation.parse(data.packages);
    console.log("validatedPackages", validatedPackages)

    const validatedOptions = serviceOptionsValidation.parse(data.options);
    console.log("validatedOptions", validatedOptions)

    return await this.repository.create({
      packages: validatedPackages,
      options: validatedOptions,
    });
  }

  async updateService(id: string, data: any) {
    const validatedData = carServiceValidation.parse(data);
    return await this.repository.update(id, validatedData);
  }

  async updatePartialService(id: string, data: any) {
    // For partial updates, we'll validate only the fields that are present
    const validatedData = carServiceValidation.partial().parse(data);
    return await this.repository.updatePartial(id, validatedData);
  }

  async deleteService(id: string) {
    return await this.repository.delete(id);
  }
}

const autocarService = new AutocareServiceService();
export default autocarService;
