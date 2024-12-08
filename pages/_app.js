import Navbar from '../components/Navbar';
import '../styles/globals.css';
// <Navbar />
function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
