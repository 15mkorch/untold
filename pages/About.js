import Head from 'next/head';
import Link from 'next/link';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';

export default function About() {
    return (
        <div className="background1">
            <Head>
                <title>The Untold Story Project- About</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <NewNav />

            <div className="aboutContainer">
                <div className="top">
                    <h2>“What did I need?”</h2>

                    <p classname="poemLine">The question was relentless.</p>
                    <p classname="poemLine">Just as my mind found a new topic to ponder, this question always invited itself back in.</p>

                    <p classname="poemLine">I wanted to impact the next generation of people who experienced the same struggles of abuse and mental health without knowing what I needed. </p>

                    <p classname="poemLine">I knew my life was unique, but no one is that unique. If I could figure out what I truly needed, well, there would be thousands of people who could probably benefit from that answer.</p>

                    <p classname="poemLine">This question took me on a journey.</p>

                    <p classname="poemLine">I traveled the world.</p>

                    <p classname="poemLine">I met people.</p>

                    <p classname="poemLine">I stopped numbing my heart.</p>

                    <p classname="poemLine">I talked to God.</p>

                    <p classname="poemLine">I ran a successful business and worked on other start ups. </p>

                    <p classname="poemLine">And through it all, I’m not sure if I’ve found the answer quite yet, but I think I’ve found a good place to start. </p>

                    <p classname="poemLine">That’s how The Untold was born. So, if you’re here, I thank you for joining me on this quest to discover what “I” needed.</p>
                    <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Join our Community</button></a>


                </div>

                <div className="aboutPhotos">
                    <ul className="photosList">
                        <li><a href="https://twitter.com/TheUntoldbtc/" target="_blank"><img className="aboutphoto1" src="cassita.jpg" /></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://twitter.com/TheUntoldbtc/" target="_blank"><img className="aboutphoto2" src="maria.jpg" /></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://twitter.com/TheUntoldbtc/" target="_blank"><img className="aboutphoto3" src="truck.jpg" /></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://twitter.com/TheUntoldbtc/" target="_blank"><img className="aboutphoto4" src="cassita2.png" /></a></li>
                    </ul>



                </div>

            </div>


        </div>




    )
}