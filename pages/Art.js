import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Art() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project- Art</title>
                <link rel="icon" href="/favicon.ico" />
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
                        <p>Winner Announced: November 30th, 2020</p>
                        <button>Submit Here</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
