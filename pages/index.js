import Head from 'next/head';
import Navbar from '../components/navbar';


export default function Home() {
  return (
    <div id="index-background" className="background">
      <Head>
        <title>
          The Untold Story Project-- Raising awareness of narcissism and abuse
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Untold Story Project believes in the power of stories that are kept under the rug. Stories of narcissism, domestic abuse, emotional abuse, and manipulation are difficult circumstances to reconcile and navigate. By telling our stories, we desire to bring empathy, education, and most of all hope to people who have shared in these experiences and those who haven’t. " />
        <meta property="og:title" content="The Untold Story Project-- Raising awareness of narcissism and abuse" />
      </Head>
      <Navbar />
      <div className="title">
        <div>
          <h1> Untold </h1>
          <h2>Believing in the power of the untold story</h2>
        </div>
      </div>
      <img className="picture" src="/home_image.png" />
    </div>

  )
}
