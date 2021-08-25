import Head from 'next/head';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';


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
      <NewNav />
      <SideNav />
      <div className="homeContainer">
        <h1 className='homeTitle'> Untold Media</h1>
        <div className='homeSubtitle'>
          <h2>All the things I couldn't say</h2>
          <h2>All the things I couldn't be</h2>
        </div>
        <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Join our Community</button></a>
      </div>
      <div className="homePhotoContainer">
        <img className="picture" src="/homeImage.png" />
      </div>

    </div>


  )
}
