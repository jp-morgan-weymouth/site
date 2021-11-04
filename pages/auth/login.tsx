import { Session } from "@supabase/supabase-js";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();

  const handleLogin = async (phone: string) => {
    const { session, error } = await supabase.auth.signIn({
      phone: phone,
    });

    if (session) alert("Sent code!"); // Will improve with ui library later
    if (error) alert(JSON.stringify(error));
  };
  const handleCode = async (phone: string, code: string) => {
    const { session, error } = await supabase.auth.verifyOTP({
      phone: phone,
      token: code,
    });

    const val = JSON.stringify(session);
  };

  return (
    <div className="main-auth">
      <Head>
        <title>Login - Perfectly legit bank</title>
      </Head>

      <section className="start">
        <div className="form">
          <h1 className="title">
            For security reasons, we only allow phone number logins.
          </h1>
          <div className="auth-container">
            <input
              className="auth-input"
              type="tel"
              placeholder="Your phone number"
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
              required
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              className="auth-button-primary"
              disabled={loading}
              type="submit"
            >
              <span>{loading ? "Loading" : "Send code."}</span>
            </button>
            <br />
            {/* <input
            className="auth-input"
            type="text"
            placeholder="Auth code"
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleCode(email, code);
            }}
            className="auth-button-primary"
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send Code"}</span>
          </button>
          <button className="auth-button-secondary" onClick={() => null}>
            Call API
          </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
