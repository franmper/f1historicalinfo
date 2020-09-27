import "../styles/index.css";
import "../styles/nprogress.css"
import Router from "next/router";
import { Layout } from "../components/layout/layout";
import NProgress from 'nprogress'

Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
