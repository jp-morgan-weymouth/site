import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <section>
          <h1>Perfectly Legit Bank</h1>
        </section>
        <section>
          <a href="">Home</a>
          <a href="/why-us">Why Us</a>
          <a href="/services">Services</a>
        </section>
        <section></section>
      </nav>

      <section>
        <div className="title-holder">
          <h1>
            THE BANK WITH THE <br />
            UNIQUE ABILITY <br />
            <span id="bold">TRUST</span>
          </h1>
          <div id="link-holder">
            <a href="/auth/register" className="button-primary">
              Join Us
            </a>
            <a href="/about" className="button-secondary">
              Learn More
            </a>
          </div>
        </div>

        <Image
          src={require("../public/images/card.png")}
          alt=""
          id="cred-card"
        />
      </section>
      <svg
        width="1440"
        height="40"
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="blob22"
      >
        <path
          d="M720 0C424.615 0 0 40 0 40H1440C1440 40 1015.38 0 720 0Z"
          fill="#00FF75"
        />
      </svg>
    </div>
  );
}
