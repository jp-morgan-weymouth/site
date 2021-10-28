import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
	return (
		<div className='main'>
			<Head>
				<title>Perfectly legit bank</title>
			</Head>

			<section className='start'>
				<h1 id='start-title'>
					A Real Bank
					<br />
					<span id='start-header'>For Real People</span>
					<br />
					<span id='start-subtitle'>Trust us with your money</span>
				</h1>

				<h2 id='start-down'>Scroll Down</h2>
				<div id='image-container'>
					<Image src={"/images/down.webp"} alt='' layout='fill' />
				</div>
			</section>
			<section className='scrollarea'>
				{/* About us */}
				<article></article>
			</section>
		</div>
	);
}
