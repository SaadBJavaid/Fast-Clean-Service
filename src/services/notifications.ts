import { INotification } from "../models/Notification";
import notificationRepository from "../repositories/Notifications";

class NotificationService {
    async getAllNotificationsForUser(userId: string): Promise<INotification[]> {
        return await notificationRepository.findByUserId(userId);
    }

    async updateNotificationStatus(notificationId: string, status: "unread" | "read"): Promise<INotification | null> {
        return await notificationRepository.update(notificationId, { status });
    }
}

const notificationService = new NotificationService();
export default notificationService;
