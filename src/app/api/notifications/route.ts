import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import notificationService from "../../../services/notifications";

export async function GET(req: NextRequest, res: NextApiResponse) {
    await dbConnect();

    try {
        const userId = req.nextUrl.searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ success: false, message: "User ID is required" });
        }

        const notifications = await notificationService.getAllNotificationsForUser(userId);

        return NextResponse.json({ success: true, notifications });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
}
