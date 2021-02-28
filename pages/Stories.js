import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Stories() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project- Stories</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <Navbar />
            <div cassName="newcommunity-container">
                <div className="top">
                    <img className="testphoto" src="USP.jpg" />
                    <div className="USP-top">
                        <h1 className="featuredBlog">The Untold Story Project </h1>
                        <h2 className="description">I happen to believe some of the most powerful stories go untold. We're determined to share them.</h2>
                        <div className="buttons">
                            <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Get Updates</button></a>

                        </div>
                    </div>

                </div>

                <div className="flex-container wrap">

                    <div className="flex-item e1">
                        <Link href="/Taylor"><a><h3>E1: Realizing my Home was Different</h3></a></Link>
                    </div>
                    <div className="flex-item e2"><h3>E2: Research on Narcissism Changed my Life</h3></div>
                    <div className="flex-item e3"><h3>E3:Daddy's Little Girl Wannabe</h3></div>
                    <div className="flex-item e4"><h3>4:There wasn't a playbokk for an Incarserated Parent</h3></div>
                    <div className="flex-item e5"><h3>E5: The Power of Vulnerability in an Epidemic of Fatherlessness</h3></div>
                    <div className="flex-item e6"><h3>E6: Fight One More Day</h3></div>
                </div>
            </div>


        </div>

    )
}
