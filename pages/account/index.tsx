/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Session } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";

/*
  Hello future people reading this,
  I hope you like the code as I spent almost a week learning a new framework.


*/

export async function getServerSideProps() {
  let cookie = Cookies.get("auth");
  try {
    console.log(cookie);
  } catch (e) {
    console.log("Error getting cookies");
  }

  return { props: {} };
}

export default function Account({ cookie }: any) {
  let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();
  let Cookie = Cookies.get("auth");

  return (
    <>
      <h1>{cookie}</h1>
    </>
  );
}
