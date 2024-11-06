import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
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

const Notification = mongoose.models.Notification ||
    mongoose.model('Notification', notificationSchema);

export { Notification };
