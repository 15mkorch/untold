import Head from 'next/head';
import NewNav from '../components/NewNav';
import Link from 'next/link';

export default function Episode3() {
    return (
        <div className='background-blog'>
            <Head>
                <title>Daddy's Little Girl Wannabe</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <NewNav />

            <div className="top-transcript">

                <div className='image3'>
                </div>
                <div className='highlight-block'>
                    <h1 className='title'>Daddy's Little Girl Wannabe</h1>
                    <p className='highlight'> "The picture that I had in my head of abuse growing up. It didn't reconcile with my home environment."</p>
                    <div className="buttons">
                        <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Join the community</button></a>

                    </div>
                </div>
            </div>

            <div className='TaylorText'>
                <div className="iconblock">
                    <h1>Transcript</h1>
                    <Link href="https://open.spotify.com/episode/3fM9M8wRfs1uHTP7z9BkCG?si=nzi4Xx5FT8SGqPJJaDxU8A">
                        <a title="spotifylink"><img className="podcastlink1" src="spotify.png" /></a>
                    </Link>
                    <Link href="https://podcasts.apple.com/us/podcast/e1-realizing-my-home-was-different/id1536527419?i=1000495360155">
                        <a title="applelink"><img className="podcastlink2" src="apple.png" /></a>
                    </Link>
                </div>

                <p> Transcript coming soon</p>
            </div>



        </div>

    )
}

