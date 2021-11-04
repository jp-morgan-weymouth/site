import Head from "next/head";
import { useRouter } from "next/router";

export default function Page404() {
	const router = useRouter();

	return (
		<div className='main-over'>
			<Head>
				<title>500 - Perfectly legit bank</title>
			</Head>

			<section className='start'>
				<h1 id='start-title'>
					500
					<br />
					<span id='start-header'>Internal Server Error</span>
				</h1>
			</section>
		</div>
	);
}
