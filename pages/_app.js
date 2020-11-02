import EmotionTheme from "../theme/EmotionTheme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyles from "../theme/GlobalStyles";
import Head from "next/head";

import { BreakpointProvider } from "../utils/breakpoint";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
// Seo
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useEffect, useState } from "react";
import ImportantMessage from "@/components/ImportantMessage/ImportantMessage";

function MyApp({ Component, pageProps }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [imHeight, setImHeight] = useState(0);
  const [imIsVisible, setImIsVisible] = useState(true);

  const onScrollPage = () => {
    if (!imIsVisible || (imIsVisible && window.pageYOffset > imHeight)) {
      document.querySelector("header").classList.add("sticky");
      document.querySelector("main").style.paddingTop = headerHeight + "px";
    } else {
      document.querySelector("header").classList.remove("sticky");
      document.querySelector("main").style.paddingTop = 0;
    }
  };

  useEffect(() => {
    onScrollPage();
    window.removeEventListener("scroll", onScrollPage);
    window.addEventListener("scroll", onScrollPage);
  }, [imHeight, imIsVisible]);

  return (
    <EmotionTheme>
      <BreakpointProvider>
        <GlobalStyles />

        <DefaultSeo {...SEO} />
        <Head>
          <meta httpEquiv="content-language" content="pl-PL" />
          <meta name="keywords" content="studio tatuażu warszawa" />
          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          {/* Fonts */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin=""
          />
          {/* Meta */}
        </Head>

        <ImportantMessage
          setImHeight={setImHeight}
          setImIsVisible={setImIsVisible}
          imIsVisible={imIsVisible}
          onScrollPage={onScrollPage}
        />
        <Header setHeaderHeight={setHeaderHeight} />

        <main>
          <Component {...pageProps} headerHeight={headerHeight} />
        </main>

        <Footer />
      </BreakpointProvider>
    </EmotionTheme>
  );
}

export default MyApp;
