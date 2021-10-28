import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page404() {
	const router = useRouter();

	return (
		<div className='main-over'>
			<Head>
				<title>404 - Perfectly legit bank</title>
			</Head>

			<section className='start'>
				<h1 id='start-title'>
					404
					<br />
					<span id='start-header'>Page Not Found</span>
					<br />
					<span onClick={() => router.back()} id='start-subtitle'>
						Go Back
					</span>
				</h1>
			</section>
		</div>
	);
}
