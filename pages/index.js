import Head from 'next/head';
import Navbar from '../components/navbar';


export default function Home() {
  return (
    <div id="index-background" className="background1">
      <Head>
        <title>
          The Untold Story Project-- A podcast that finds strength in sharing the untold
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Some of the most powerful stories go untold. I hope to change that. We share stories on our podcast that are close to us. They have shaped who we have become, and can be a lot to swallow. There’s a hundred reasons as to why we wouldn’t talk about family, brokenness, and redemption, but that doesn’t mean we can’t find healing or even joy in stepping out." />
        <meta property="og:title" content="The Untold Story Project-- A podcast that finds strength in sharing the untold" />

      </Head>
      <Navbar />

      <div className="title">
        <div>
          <h1 className="untoldTitle"> Untold </h1>
          <div className='line'><h2>Believing in the power of the untold story</h2></div>
          <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Join our Community</button></a>
        </div>
      </div>
      <img className="picture" src="/home_image.png" />
    </div>


  )
}
