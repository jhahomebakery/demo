import { useEffect } from "react";
import "../styles/globals.css";
import {StoreProvider} from '../utils/Store'
function MyApp({ Component, pageProps }) {
  // Code to handle CSS issue of material design when page is reladed
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (<StoreProvider>
    <Component {...pageProps} />
  </StoreProvider> );
}

export default MyApp;
