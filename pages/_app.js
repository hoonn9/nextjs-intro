import Layout from "../components/Layout";
import "../styles/globals.css";
// custom app component 에서만 기존 css import 가능

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
