import "@/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
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
