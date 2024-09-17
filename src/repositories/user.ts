import { UserInfo } from "../models/User";
import { IUserInfo } from "../types/user";

class UserRepository extends UserInfo {
  async create(data: Partial<IUserInfo>): Promise<IUserInfo> {
    const user = new UserInfo(data);
    return await user.save();
  }

  async findById(id: string): Promise<IUserInfo | null> {
    return await UserInfo.findById(id);
  }

  async findAll(): Promise<IUserInfo[]> {
    return await UserInfo.find();
  }

  async update(id: string, userData: Partial<IUserInfo>): Promise<IUserInfo | null> {
    return await UserInfo.findByIdAndUpdate(id, userData, { new: true });
  }

  async delete(id: string): Promise<IUserInfo | null> {
    return await UserInfo.findByIdAndDelete(id);
  }
}

export default new UserRepository();
