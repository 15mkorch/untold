import Head from 'next/head';
import Link from 'next/link';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';

export default function Stories() {
    return (
        <div className="background3">
            <Head>
                <title>The Untold Story Project- Stories</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <NewNav />

            <div className="storyContainer">

                <div className="USP-top">
                    <h1 className="featuredBlog">The Untold Story Project </h1>
                    <h2 className="description">I happen to believe some of the most powerful stories go untold. We're determined to share them.</h2>
                    <div className="buttons">
                        <a href="https://open.spotify.com/show/5vUl6twP1NZZ1jxg74Qqwb?si=8e788835b00d46e5" target="blank"><button >Listen Here</button></a>

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
                        <Link href="/Episode6"><a>E6: Fight One More Day
                        </a></Link>
                    </div>

                </div>
            </div>


        </div>

    )
}
