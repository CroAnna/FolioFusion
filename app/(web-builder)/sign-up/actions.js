"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

export async function signup(prevState, formData) {
  // does not work without prevState
  const supabase = createClient();
  const schema = z
    .object({
      password: z
        .string()
        .trim()
        .min(6, "Password must have minimum of 6 characters"),
      repeat: z.string(),
      email: z.string().email("Invalid email address"),
    })
    .refine((data) => data.password === data.repeat, {
      message: "Passwords do not match",
      path: ["repeat"],
    });

  const validation = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    repeat: formData.get("repeat"),
  });

  console.log(validation);

  if (validation.success) {
    const { email, password } = validation.data;

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.log(error);
      return { message: error.message };
    }

    revalidatePath("/", "layout");
    redirect("/validate-account");
  } else {
    return {
      message: validation.error.issues.map((issue) => issue.message).join(", "),
    };
  }
}
