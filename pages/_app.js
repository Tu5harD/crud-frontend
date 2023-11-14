import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Demo File | Tush Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
