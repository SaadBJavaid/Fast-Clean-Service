import {INotification, Notifications} from "../models/Notification";

class NotificationRepository {
    async create(notificationData: Partial<INotification>): Promise<INotification> {
        const notification = new Notifications(notificationData);
        return await notification.save();
    }

    async findById(id: string): Promise<INotification | null> {
        return Notifications.findById(id);
    }

    async findAll(): Promise<INotification[]> {
        return Notifications.find();
    }

    async findByUserId(userId: string): Promise<INotification[]> {
        return Notifications.find({ user: userId });
    }

    async update(id: string, notificationData: Partial<INotification>): Promise<INotification | null> {
        return Notifications.findByIdAndUpdate(id, notificationData, { new: true });
    }

    async delete(id: string): Promise<INotification | null> {
        const notification = await Notifications.findByIdAndDelete(id);
        if (!notification) {
            throw new Error("Notification not found");
        }
        return notification;
    }
}

const notificationRepository = new NotificationRepository();
export default notificationRepository;
