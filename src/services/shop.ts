import appointmentRepository from "../repositories/appointments";

class ShopService {
  async isShopOpen(date: Date): Promise<Boolean> {
    return await appointmentRepository.isShopOpen(date);
  }

  async getAllShopClosed(): Promise<any[]> {
    return await appointmentRepository.findAllShopClosedFromToday();
  }

  async openCloseShop(date: Date, openClose: boolean = false): Promise<Boolean> {
    return await appointmentRepository.openCloseShop(date, openClose);
  }
}

const shopService = new ShopService();
export default shopService;
