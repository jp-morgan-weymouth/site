import { Session } from "@supabase/supabase-js";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { AuthModal } from "../../components";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setnumber] = useState("");
  const [code, setCode] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();

  const handleLogin = async (phone: string) => {
    const { session, error } = await supabase.auth
      .signIn({
        phone: phone,
      })
      .then((val) => {
        // setModalVisible(!modalVisible);
        setCurrentPage(currentPage + 1);
        return val;
      });
    if (error) console.error(error);
  };
  const handleCode = async (phone: string, code: string) => {
    const { session, error } = await supabase.auth.verifyOTP({
      phone: phone,
      token: code,
    });

    if (session) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="main-auth">
      <Head>
        <title>Login - Perfectly legit bank</title>
      </Head>

      <AuthModal
        title="hello world"
        body="this is a body"
        visible={modalVisible}
        setVisible={setModalVisible}
        func={handleCode}
        number={number}
      />

      <section className="start">
        <div className="form">
          <article
            id="first-page"
            className={currentPage == 0 ? "" : "scrolled-out"}
          >
            <h1 className="title">
              For security reasons, we only allow phone number logins.
            </h1>
            <div className="auth-container">
              <input
                className="auth-input"
                type="tel"
                placeholder="Your phone number"
                onChange={(e) => setnumber(e.target.value)}
                pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(number);
                }}
                className="auth-button-primary"
                disabled={loading}
                type="submit"
              >
                <span>{loading ? "Loading" : "Send code."}</span>
              </button>
            </div>
          </article>
          <article
            id="second-page"
            className={currentPage == 1 ? "scrolled-in" : "scrolled-out-sequel"}
          >
            <h1 className="title">Input auth code sent to your phone.</h1>
            <div className="auth-container">
              <input
                className="auth-input"
                type="text"
                placeholder="Auth code"
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCode(number, code);
                }}
                className="auth-button-primary"
                disabled={loading}
              >
                <span>{loading ? "Loading" : "Confirm Code"}</span>
              </button>
              <button
                className="auth-button-secondary"
                onClick={() => alert("")}
              >
                Call API
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
