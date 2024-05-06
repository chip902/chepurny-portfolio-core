import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Roboto } from 'next/font/google';
import Layout from '../layout';

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  display: 'swap',
  subsets: ['latin']
});

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`body { font-family: ${roboto.style.fontFamily}; }`}</style>
        </Head>
        <Layout>
        <body className={roboto.className}>
          <Main />
          <NextScript />
        </body>
        </Layout>
      </Html>
    );
  }
}

export default MyDocument;
