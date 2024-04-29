import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum of 3 characters required." })
    .max(30, { message: "Maximum 30 caracters." }),
  username: z
    .string()
    .min(3, { message: "Minimum of 3 characters required." })
    .max(30, { message: "Maximum 30 caracters." }),
  bio: z
    .string()
    .min(3, { message: "Minimum of 3 characters required." })
    .max(1000, { message: "Maximum 1000 caracters." }),
});