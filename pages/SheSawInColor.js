import Head from 'next/head';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';

export default function SheSawInColor() {
    return (
        <div className="index-sheSawInColor">
            <Head>
                <title>She Saw in Color</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <NewNav />

            <div className="bookContainer">

                <img className="cameraphoto" src="albumcover.png" />

                <div className="right">
                    <div>
                        <h1 className="cover">She Saw in Color</h1>
                        <h2 className="by">By: theuntold.btc</h2>
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
            </div>
        </div>

    )
}
