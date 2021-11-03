import { Session } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { basePath } from "../../utils/config";
import { supabase } from "../../utils/supabaseClient";

export default function Account({ cookie }: any) {
  let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();

  return (
    <>
      <button>Click Me</button>
    </>
  );
}
