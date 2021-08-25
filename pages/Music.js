import Head from 'next/head';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';

export default function Music() {
    return (
        <div className="background1">
            <Head>
                <title>The Untold Story Project- Music</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <NewNav />
            <SideNav />
            <div className="musicContainer">
                <div className="musicFlex">
                    <div>
                        <h1 className="typewriter">Coming Soon</h1>
                    </div>
                    <div>
                        <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Be first to hear!</button></a>
                    </div>
                    <div classname="umbrellaDiv">
                        <img className="musicPhoto" src="umbrella.png" />
                    </div>
                </div>
            </div>


        </div>




    )
}