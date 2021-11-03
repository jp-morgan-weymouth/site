import { Session } from "@supabase/supabase-js";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Account() {
  let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();

  useEffect(() => {
    setSession(supabase.auth.session());
    alert(session);
    if (!session?.user) router.push("/auth/login");
  }, [router, session]);

  return (
    <>
      <h1>You are authenticated</h1>
    </>
  );
}
