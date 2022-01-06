import NavBar from "../components/NavBar";
import "../styles/globals.css";
// custom app component 에서만 기존 css import 가능

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
      Hello
    </>
  );
}
