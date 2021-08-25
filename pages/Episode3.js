import Head from 'next/head';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';

export default function Episode3() {
    return (
        <div className="background">
            <Head>
                <title>Daddy's Little Girl Wannabe</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>


            <div className="background-blog">
                <NewNav />
                <SideNav />
                <div className="top-transcript">
                    <div className='image3'>
                    </div>
                    <div className='highlight-block'>
                        <h1 className='title'>Daddy's Little Girl Wannabe</h1>
                        <p className='highlight'></p>
                        <div className="buttons">
                            <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Get Updates</button></a>

                        </div>
                    </div>
                </div>

                <div className='Episode2Text'>
                    <p>Transcript coming soon.</p>
                </div>
            </div>

        </div>

    )
}


