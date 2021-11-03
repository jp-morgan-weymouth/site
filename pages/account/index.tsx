import { Session } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { basePath } from "../../utils/config";
import { supabase } from "../../utils/supabaseClient";

export async function getServerSideProps() {
  let cookie = Cookies.get("auth");
  if (cookie) console.log("Cookie Found");

  return { props: { cookie } };
}

export default function Account({ cookie }: any) {
  let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();
  let Cookie = Cookies.get("auth");

  return (
    <>
      <h1>{Cookie}</h1>
    </>
  );
}
