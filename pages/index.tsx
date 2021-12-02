/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable unused-imports/no-unused-vars */

import { Session } from "@supabase/supabase-js";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  let [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <div className="main">
      <Head>
        <title>Perfectly legit bank</title>
      </Head>

      <section className="start">
        <h1 id="start-title">
          A Real Bank
          <br />
          <span id="start-header">For Real People</span>
          <br />
          <span id="start-subtitle">Trust us with your money</span>
        </h1>

        <h2 id="start-down">Scroll Down</h2>
        <div id="image-container">
          <Image src={"/images/down.webp"} alt="" layout="fill" />
        </div>
      </section>
      <section className="scrollarea">
        {/* About us */}
        <article>
          <h1 className="about-header">
            Who we are.
            <br />
            <span className="about-subheader">The founders</span>
          </h1>
          <div className="about-content">
            <span className="about-content-text">
              <h3 className="about-content-text-header">Our Founder/CEO</h3>
              Hello, my name is Bryony Bell.
              <br />I created this company because I do not trust the
              centralisation of banking. Decentralisation is our future, and our
              future is reality.
            </span>
            <img src="/images/ceo.jpg" className="about-content-image" />
          </div>
          <div className="about-content">
            <span className="about-content-text">
              <h3 className="about-content-text-header">Our CTO</h3>
              Hello, my name is Rhys Woolcott.
              <br />I created most of what you see today on this site. I fully
              support the decentralisation of the web, being a strong believer
              in ownership and privacy of your own data. I also hate government
              censorship heavily; with the new web, you will be able to view and
              consume non-censored material to your pleasing whenever you want.
            </span>
            <img
              src="https://via.placeholder.com/400"
              className="about-content-image"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
