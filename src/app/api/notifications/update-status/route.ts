import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import notificationService from "../../../../services/notifications";

export async function PATCH(req: NextRequest, res: NextApiResponse) {
    await dbConnect();

    try {
        const { notificationId, status } = await req.json();

        if (!notificationId || !status) {
            return NextResponse.json({ success: false, message: "Notification ID and status are required" });
        }

        const updatedNotification = await notificationService.updateNotificationStatus(notificationId, status);

        if (!updatedNotification) {
            return NextResponse.json({ success: false, message: "Notification not found or could not be updated" });
        }

        return NextResponse.json({ success: true, notification: updatedNotification });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
