import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Art() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project- Art</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-RX3EQ6M4XE');
                </script>
            </Head>
            <div className="artcontainer">
                <Navbar />
                <img className="cameraphoto" src="camera.png" />

                <div className="right">
                    <div className="UntoldArtist">
                        <h1>The Untold Artist</h1>
                        <h3>I happen to believe that some of the best art never leaves the notebook.</h3>
                    </div>

                    <div>

                    </div>
                    <div className="poem">
                        <p>"Let my pain be my worship</p>
                        <p>let my purpose still prevail</p>
                        <p>that somewhere in the mystery I'll find it all again"</p>
                    </div>
                    <div className="contest-details">
                        <p>Contest details:</p>
                        <p>Submit an original photo inspired by the poetry above. Please include an explanation/description with 500 words or less.</p>
                        <p>Prize: $50 cash</p>
                        <p>Deadline: December 30th, 2020</p>
                        <a href="https://mary230542.typeform.com/to/GRYxsnfW" target="blank"><button>Submit Here</button></a>
                    </div>

                </div>
            </div>
        </div>

    )
}
