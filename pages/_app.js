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
          <meta property="og:title" content="The Untold Story Project - A podcast that finds strength in sharing the untold" />
          <meta property="og:description" content="Some of the most powerful stories go untold. I hope to change that. We share stories on our podcast that are close to us. They have shaped who we have become, and can be a lot to swallow. There’s a hundred reasons as to why we wouldn’t talk about family, brokenness, and redemption, but that doesn’t mean we can’t find healing or even joy in stepping out. " />
          <meta property="og:url" content="https://untoldstoryproject.org/" />
          <meta property="og:image" content="https://untoldstoryproject.org/" />

        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
export default MyApp
