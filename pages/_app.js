import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
// import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
      </Head>
      <GoogleReCaptchaProvider reCaptchaKey="6LfcoKYiAAAAAPhpVWQI-_XGbkkLYLUDCnn95Dqz">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleReCaptchaProvider>
    </>
  );
}
