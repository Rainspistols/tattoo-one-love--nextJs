import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default ({ children, headTitle, importantMessageData,categories }) => (
  <>
    <Head>
      <title>{headTitle}</title>
    </Head>
    <Header
      importantMessageData={importantMessageData}
      categories={categories}
    />

    <main>{children}</main>
    <Footer />
  </>
);
