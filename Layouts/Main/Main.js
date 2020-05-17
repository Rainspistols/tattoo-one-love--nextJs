import Head from 'next/head';
import Header from '../../components/Header/Header';

export default ({ children, headTitle }) => (
  <>
    <Head>
      <title>{headTitle}</title>
    </Head>
    <Header />

    <main>{children}</main>
  </>
);
