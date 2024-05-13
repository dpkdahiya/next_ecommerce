import { cookies } from "next/headers";
import React from "react";

function Hello() {
  const name = cookies().get("user").value;
  return <h1>hello {name}</h1>;
}

export default Hello;
