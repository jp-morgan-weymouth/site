/* eslint-disable no-unused-vars */
// import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.scss";
import "../styles/modal.scss";
import { useEffect, useState } from "react";
import React from "react";
import Head from "next/head";
// import { Session } from "@supabase/supabase-js";
import AuthProvider from "../utils/auth.provider";
// import cookie from "cookie";

function App({ Component, pageProps, authenticated }: any) {
  let [scrolled, setScrolled] = useState(false);
  let [burgerActive, setBurgerActive] = useState(false);
  // let [session, setSession] = useState<Session | null>(null);
  let router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setScrolled(true);
      if (window.scrollY < 100) setScrolled(false);
      console.log(scrolled);
    });
  }, [scrolled]);

  // const GetInitialProps = async (appContext: any) => {
  //   let authenticated = false;
  //   const request = appContext.ctx.req;

  //   if (request) {
  //     request.cookies = cookie.parse(request.headers.cookie || "");
  //     authenticated = !!request.cookie.auth;
  //   }

  //   const appProps: any = await GetInitialProps(appContext);

  //   return { ...appProps, authenticated };
  // };

  const LogoImage = React.forwardRef(function LogoImage(
    _props: any,
    _ref: any
  ) {
    return (
      <Image
        onClick={() => router.push("/")}
        draggable={false}
        src={"/images/SVG/logo.svg"}
        alt=""
        layout="fill"
        id="logo-image"
        objectFit="contain"
      />
    );
  });
  return (
    <AuthProvider authenticated={authenticated}>
      <Head>
        <meta name="description" content="A Real bank for Real people" />
        <meta name="theme-color" content="#00ff75" />
        <link rel="icon" href="/images/SVG/logo.svg" />

        <meta name="title" content="Perfectly legit bank" />
        <meta name="description" content="A Real bank for Real people"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rhysw.live/" />
        <meta property="og:title" content="Perfectly legit bank" />
        <meta property="og:description" content="A Real bank for Real people" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rhysw.live/" />
        <meta property="twitter:title" content="Perfectly legit bank" />
        <meta
          property="twitter:description"
          content="A Real bank for Real people"
        />
        <meta property="twitter:image" content=""></meta>
      </Head>
      <nav>
        <div className="left">
          <Link href="/" passHref={true}>
            <a id="logo-link">
              <LogoImage />
            </a>
          </Link>
        </div>
        <div className="right">
          <Link href="/">Home</Link>
          <Link href="/about">Who we are</Link>
          <Link href="/investments">Investments</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/auth/login">Log in</Link>
          <div
            id="burger"
            onClick={() => {
              setBurgerActive(!burgerActive);
            }}
          >
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
        </div>
        <div
          className={burgerActive ? "burgerMenu burgerActive" : "burgerMenu"}
        >
          <div className="wrapper">
            <Link href="/">Home</Link>
            <Link href="/about">Who we are</Link>
            <Link href="/investments">Investments</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Products</Link>
            <Link href="/auth/login">Log in</Link>
          </div>
        </div>
      </nav>
      <div className="area-51">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default App;
