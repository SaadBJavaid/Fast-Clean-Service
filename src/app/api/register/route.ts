import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import { UserInfoSchema } from "../../../types/user";
import userService from "../../../services/user";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  await dbConnect();
  try {
    const body = await req.json();
    const validatedData = UserInfoSchema.parse(body);

    const newUser = await userService.createUser(validatedData);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((e) => e.message).join(", ") }, { status: 400 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
  }
};
