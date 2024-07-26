import User from "../../../lib/models/users";
import { connectToDb } from "../../../lib/connect";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();
  console.log(email, password);
  await connectToDb();

  const hashedPw = await bcrypt.hash(password, 10);
  console.log(hashedPw);

  try {
    const newUser = await User.create({ email, password: hashedPw });

    console.log(newUser);
    return new NextResponse("user registered", { status: 200 });
  } catch (err: any) {
    console.log(err);
    return new NextResponse(err, { status: 500 });
  }
};
