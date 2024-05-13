"use server";

import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcryptjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const prisma = new PrismaClient();

export async function create_user(formdata) {
  const name = formdata.get("name");
  const email = formdata.get("email");
  const salt = await genSalt(10);
  const password = await hash(formdata.get("password"), salt);
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  cookies().set("user", name);
  redirect("/login");
}

export async function verify_user(formdata) {
  const email = formdata.get("email");
  const password = hash(formdata.get("password"));
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user) {
    if (await compare(password, user.password)) {
      cookies().set("user", user.name);
      redirect("/");
    } else {
      throw Error("Wrong password");
    }
  } else {
    throw Error("User not found");
  }
}
