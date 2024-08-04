"use server";

import { redirect } from "next/navigation";

export async function filter(formData: FormData) {
  console.log("formData", formData);
  const category = formData.get("category");

  //   console.log("category", category);

  redirect(`/?category=${category}`);
}
