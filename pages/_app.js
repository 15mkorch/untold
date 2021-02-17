import App, { Container } from 'next/app';
import Head from 'next/head';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import TagManager from 'react-gtm-module';
const tagManagerArgs = { gtmId: 'GTM-KR8GZ46' }


class MyApp extends App {

  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Bizz Websites - Website Development & Digital Marketing</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Bizz Websites - Website Development & Digital Marketing" />
          <meta property="og:description" content="Bizz Websites can bring your creative website or application ideas to life." />
          <meta property="og:url" content="https://www.bizz-websites.com/" />
          <meta property="og:image" content="https://www.bizz-websites.com/og-image.jpg" />

        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
export default MyApp
