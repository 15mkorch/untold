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
          <title>the Untold Story Project</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="The Untold Story Project - Raising Awareness of Abuse and Recovery" />
          <meta property="og:description" content="The Untold Story Project - Raising Awareness of Abuse and Recovery" />
          <meta property="og:url" content="https://www.untoldstoryproject.org/" />
          <meta property="og:image" content="https://www.untoldstoryproject.org/" />

        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
export default MyApp
