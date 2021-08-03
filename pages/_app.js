import Header from "../components/Header";
import ScrollTo from "../components/ScrollTo";
import CallModal from "../components/CallModal";

import "../styles/globals.css";
import "../styles/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <CallModal />
      <ScrollTo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
