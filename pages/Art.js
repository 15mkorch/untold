import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Art() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project- Art</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <div className="artcontainer1">
                <Navbar />

                <div className="right1">

                    <h1 className="untoldArtistTitle">The Untold Artist</h1>


                    <div className="poem1">
                        <h3 className="line">Here our art leaves the notebook.</h3>
                        <h3 className="line">Let the beauty fall like rain.</h3>
                        <h3 className="line">Let us catch each droplet.</h3>
                    </div>

                    <h4 className="comingSoon1">Podcast coming soon.</h4>


                </div>
                <div className="umberellaBox">
                    <img className="cameraphoto1" src="cassie2.png" />
                </div>

            </div>
        </div>

    )
}