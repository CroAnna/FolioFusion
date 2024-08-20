"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { checkIfUserHasActivePlan } from "@/app/_components/actionsServer";

export async function login(prevState, formData) {
  // does not work without prevState
  const supabase = createClient();

  const schema = z
    .object({
      password: z.string().min(6, "Password must have minimum of 6 characters"),
      email: z.string().email("Invalid email address"),
    })
    .required();

  const validation = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (validation.success) {
    const { email, password } = validation.data;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      return { message: error.message };
    }

    await checkIfUserHasActivePlan(email, "email");

    revalidatePath("/", "layout");
    redirect("/");
  } else {
    return {
      message: validation.error.issues.map((issue) => issue.message).join(", "),
    };
  }
}
