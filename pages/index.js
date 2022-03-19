import Head from 'next/head';
import NewNav from '../components/NewNav';


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

      <div className="homeContainer">
        <h1 className='homeTitle'>THE UNTOLD</h1>
        <div className='homeSubtitle'>
          <h2>A community that utilizes art and the infrastructure of the block chain to support those who grew up with mentally ill parents.</h2>

        </div>
        <a href="https://discord.gg/YGQAag67M4" target="blank"><button >Join our Community</button></a>
      </div>
      <div className="homePhotoContainer">
        <img className="picture" src="/homeImage.png" />
      </div>

      <h2 className="eeetitle">The Untold community exists to...</h2>
      <div className="sitckfigureflex">
        <div className="eeeflex">
          <h4>Educate.</h4>
          <p>Provide resources that bring clarity to symptoms of unhealthy mental patterns. </p>
          <img className="sticks" src="/educatestick.png" />
        </div>
        <div className="eeeflex">
          <h4>Empathize.</h4>
          <p>Foster deep community so that no one feels alone in their fight for freedom.</p>
          <img className="sticks" src="/empathizestick.png" />
        </div>
        <div className="eeeflex">
          <h4>Encourage.</h4>
          <p>We know the journey toward health and freedom is long. We we're here to support and grow along side of you. </p>
          <img className="sticks" src="/encouragestick.png" />
        </div>
        <div>

        </div>
      </div>


      <h3 className="blockChainTitle">Why the block chain? </h3>
      <p className="blockChain">The network of decentralized apps and smart contracts is not only changing the internet, but the world, opening up new opportunities for art, connection, and trade. We believe that strong community and the ability to express yourself through creation/art can be instrumental in overcoming mental illness or the affect of mental illness from others close to you. Additionally, the anonymity within the crypto community allows an extra layer of security to discuss more vulnerable topics. Specifically, we’re closed to support the robust and growing STX community.
      </p>
    </div>


  )
}
