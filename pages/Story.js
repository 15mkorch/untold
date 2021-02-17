import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Art() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project- Story</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <Navbar />
            <div className="text-panel">

                <div className="book-header">

                    <h1>She saw in Color</h1>
                </div>
                <div className="synopsis">
                    <p>What rules do you play by when reality is manipulated? Daughter of a narcissistically abusive household, Leah Blitz has always agreed to the life her family had already decided for her: her appearance, her activities, her future, her dreams… and most of all, music, the way she sees the world is prohibited.
                    </p>
                    <p>
                        As Leah’s senior year approaches, she’s developed a risky plan to achieve her dreams, but her guardian angels reveal that the greatest risk in it all is herself.
                </p>
                </div>
                <a className="order" href="https://mary230542.typeform.com/to/yyDwjC1y" target="blank"><button >Pre-order now</button></a>
            </div>
            <img className="storyimage" src="book.png" />
        </div>
    )
}  