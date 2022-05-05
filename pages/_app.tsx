import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import MortgageApplicationProvider from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MortgageApplicationProvider>
        <Component {...pageProps} />
      </MortgageApplicationProvider>
    </Layout>
  );
}

export default MyApp;
