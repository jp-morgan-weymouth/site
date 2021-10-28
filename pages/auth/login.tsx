import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Login() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleLogin = async (email: string) => {
		try {
			setLoading(true);
			const { error }: any = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert("Check your email for the login link!");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='main-auth'>
			<Head>
				<title>Login - Perfectly legit bank</title>
			</Head>

			<section className='start'>
				<div className='form'>
					<h1 className='title'>Log in with magic token</h1>
					<input
						className='email'
						type='email'
						placeholder='Your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						onClick={(e) => {
							e.preventDefault();
							handleLogin(email);
						}}
						className='button block'
						disabled={loading}
					>
						<span>{loading ? "Loading" : "Send magic link"}</span>
					</button>
				</div>
			</section>
		</div>
	);
}
