import Home from ".";
import app, { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import { NextResponse, NextRequest } from "next/server";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.scss";
import { JSXElementConstructor, useEffect, useState } from "react";
import fs from "fs";
// import dotenv from "dotenv";

// dotenv.config({
// 	path: path.resolve(__dirname, "../.env"),
// });

import React from "react";
import Head from "next/head";
import path from "path";
import { supabase } from "../utils/supabaseClient";
import { Session } from "@supabase/supabase-js";
import Login from "./auth/login";

function App({ Component, pageProps }: AppProps) {
	let [scrolled, setScrolled] = useState(false);
	let [session, setSession] = useState<Session | null>(null);
	let router = useRouter();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) setScrolled(true);
			if (window.scrollY < 100) setScrolled(false);
			console.log(scrolled);
		});
	}, [scrolled]);

	const LogoImage = React.forwardRef(function LogoImage(props: any, ref: any) {
		return (
			<Image
				onClick={() => router.push("/")}
				draggable={false}
				src={"/images/SVG/logo.svg"}
				alt=''
				layout='fill'
				id='logo-image'
				objectFit='contain'
			/>
		);
	});
	return (
		<>
			<Head>
				<meta name='description' content='A Real bank for Real people' />
				<meta name='theme-color' content='#00ff75' />
				<link rel='icon' href='/images/SVG/logo.svg' />

				<meta name='title' content='Perfectly legit bank' />
				<meta name='description' content='A Real bank for Real people'></meta>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://rhysw.live/' />
				<meta property='og:title' content='Perfectly legit bank' />
				<meta property='og:description' content='A Real bank for Real people' />
				<meta property='og:image' content='' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://rhysw.live/' />
				<meta property='twitter:title' content='Perfectly legit bank' />
				<meta
					property='twitter:description'
					content='A Real bank for Real people'
				/>
				<meta property='twitter:image' content=''></meta>
			</Head>
			<nav>
				<div className='left'>
					<Link href='/' passHref={true}>
						<a id='logo-link'>
							<LogoImage />
						</a>
					</Link>
				</div>
				<div className='right'>
					<Link href='/'>Home</Link>
					<Link href='/about'>Who we are</Link>
					<Link href='/investments'>Investments</Link>
					<Link href='/products'>Products</Link>
					<Link href='/contact'>Contact</Link>
					<Link href='/auth/login'>Log in</Link>
					<div id='burger'>
						<div className='block'></div>
						<div className='block'></div>
						<div className='block'></div>
					</div>
				</div>
			</nav>
			<Component {...pageProps} />
		</>
	);
}

export default App;
