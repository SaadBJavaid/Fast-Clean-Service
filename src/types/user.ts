import { z } from "zod";

export const UserInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  street: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),

  emailVerified: z.boolean().optional(),
  emailVerificationToken: z.string().optional(),
});

export type IUserInfo = z.infer<typeof UserInfoSchema>;
