import Head from 'next/head';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default ({
  children,
  importantMessage = '',

  headTitle = '',
  metaDescr = '',
  metaKeywords = '',
}) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='content-language' content='pl-PL' />
      <meta name='description' content={metaDescr} />
      <meta name='keywords' content={metaKeywords} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        rel='stylesheet'
      />
      <link rel='icon' href='/favicon.ico' />
      <title>{headTitle}</title>
    </Head>

    <Header importantMessageJson={importantMessage} />

    <main>{children}</main>

    <Footer />
  </>
);
