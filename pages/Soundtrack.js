import Head from 'next/head';


export default function Soundtrack() {
    return (
        <div className="background">
            <Head>
                <title>The Soundtrack of Color: An Untold Story of Leah Blitz</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <div className="artcontainer">
                <Navbar />
                <img className="cameraphoto" src="albumcover.png" />

                <div className="right">
                    <div>
                        <h1>The Soundtrack of Color: An Untold Story of Leah Blitz</h1>
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
