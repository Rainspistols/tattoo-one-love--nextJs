import Head from 'next/head';
import Footer from '../../components/Footer/Footer';

export default ({ children, headTitle }) => (
  <>
    <Head>
      <title>{headTitle}</title>
    </Head>

    <main>{children}</main>
    
    <Footer />
  </>
);
