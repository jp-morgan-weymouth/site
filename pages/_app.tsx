import Home from ".";
import app, { AppProps } from "next/app";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import "../styles/globals.scss";
import { useEffect, useState } from "react";

import logo from "../public/images/SVG/logo.svg";
import React from "react";

function App({ Component, pageProps }: AppProps) {
	let [scrolled, setScrolled] = useState(false);
	let router = useRouter();

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) setScrolled(true);
			if (window.scrollY < 100) setScrolled(false);
			console.log(scrolled);
		});
	}, []);

	const LogoImage = React.forwardRef(function LogoImage(props: any, ref: any) {
		return (
			<Image
				onClick={() => router.push("/")}
				draggable={false}
				src={logo}
				alt=''
				layout='intrinsic'
				id='logo-image'
				objectFit='contain'
			/>
		);
	});

	return (
		<>
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
					<Link href='/'>Who we are</Link>
					<Link href='/'>Investments</Link>
					<Link href='/'>Products</Link>
					<Link href='/'>Contact</Link>
					<Link href='/auth/login'>Log in</Link>
				</div>
			</nav>
			<Component {...pageProps} />
		</>
	);
}

export default App;
