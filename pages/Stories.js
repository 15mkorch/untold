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
            <div className="storyContainer">
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
                        <Link href="/Episode1"><a>E1: Realizing my Home was Different</a></Link>
                    </div>
                    <div className="flex-item e2">
                        <Link href="/Episode2"><a>E2: Research on Narcissism Changed my Life</a></Link>
                    </div>
                    <div className="flex-item e3">
                        <Link href="/Episode3"><a>E3:Daddy's Little Girl Wannabe</a></Link>
                    </div>
                    <div className="flex-item e4">
                        <Link href="/Episode4">
                            <a>4:There wasn't a Playbook for an Incarserated Parent</a></Link>
                    </div>
                    <div className="flex-item e5">
                        <Link href="/Episode5"><a>E5: The Power of Vulnerability in an Epidemic of Fatherlessness</a></Link>
                    </div>
                    <div className="flex-item e6">
                        <Link href="/Episode6"><a>E6: Fight One More Day</a></Link>
                    </div>
                </div>
            </div>


        </div>

    )
}
