import React from "react";
import { auth } from "@/auth";

async function Hello() {
  const data = await auth();
  return <h1>hello {data?.user?.name}</h1>;
}

export default Hello;
