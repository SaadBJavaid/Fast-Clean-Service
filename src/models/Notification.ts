import mongoose, { Document, Schema } from 'mongoose';

export interface INotification extends Document {
    user: mongoose.Types.ObjectId | string;
    message: string;
    createdAt: Date;
    status: 'unread' | 'read';
}

const notificationSchema = new Schema<INotification>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread',
    },
});

const Notifications = mongoose.models.Notifications || mongoose.model<INotification>('Notifications', notificationSchema);

export { Notifications };
