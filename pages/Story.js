import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Art() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project- Story</title>
                <link rel="icon" href="/favicon.ico" />
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'G-RX3EQ6M4XE');
        </script>
            </Head>
            <Navbar />
            <div className="text-panel">

                <div className="book-header">
                    <h1>Color</h1>
                </div>
                <div className="synopsis">
                    <p>Leah, a passionate 17- year old must decide to how to pursue her secret love of music that is prohibited by her narcissistically abusive household. In pursuit of her deepest love, Leah’s guardian angels reveal how her plot, if successful, could lead to her destruction.</p>
                </div>
                <a href="https://mary230542.typeform.com/to/yyDwjC1y" target="blank"><button >Pre-order now</button></a>
            </div>
            <img className="storyimage" src="book.png" />
        </div>
    )
}  