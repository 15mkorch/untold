import Head from 'next/head';
import Navbar from '../components/navbar';

export default function NewCommunity() {
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
                    <img className="testphoto" src="testphoto.png" />

                    <h1 className="featuredBlog">The Power of Vulnerability in an Epidemic of Fatherlessness </h1>
                    <div className="buttons">
                        <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Get Updates</button></a>

                    </div>
                </div>

                <ul className="flex-container wrap">
                    <li class="flex-item">1</li>
                    <li class="flex-item">2</li>
                    <li class="flex-item">3</li>
                    <li class="flex-item">4</li>
                    <li class="flex-item">5</li>
                    <li class="flex-item">6</li>
                    <li class="flex-item">7</li>
                    <li class="flex-item">8</li>
                </ul>
            </div>


        </div>

    )
}
