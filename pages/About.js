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
            <SideNav />
            <div className="aboutContainer">
                <div className="top">
                    <h2>“What did I need?”</h2>
                    <p classname="poemLine">The question was relentless. </p>
                    <p classname="poemLine">Just as my mind found a new topic to ponder, this question always invited itself back in.</p>
                    <p classname="poemLine">It rattled my mind so much because I had to have the answer. I knew I couldn’t impact the next generation of those who share a piece of my story without it.</p>
                    <p classname="poemLine">I knew my life was unique, but no one is that unique. If I could figure out what I truly needed, well, there would be thousands of people who could probably benefit from that answer.</p>
                    <p classname="poemLine">This question took me on a journey.</p>
                    <p classname="poemLine">I traveled the world.</p>
                    <p classname="poemLine"> I met people.</p>
                    <p classname="poemLine">I stopped numbing my heart.</p>
                    <p classname="poemLine">I talked to God.</p>
                    <p classname="poemLine">I also met a friend.</p>
                    <p classname="poemLine">Turns out she’s pretty cool. And talented.</p>
                    <p classname="poemLine">This friend happened on a similar journey.</p>
                    <p classname="poemLine">So, we decided to intertwine our journey’s and pursue an answer to this question together.</p>
                    <p classname="poemLine">We had to do something. </p>
                    <p classname="poemLine">For ourselves and for those who’s pain we knew all too well. </p>
                    <p classname="poemLine">I’m not sure if we found it the whole answer.</p>
                    <p classname="poemLine">But we did find a place to start.</p>
                    <p classname="poemLine">And this piece of digital realestate that you somehow stumbled across, is our attempt to be the answer to that question.  </p>
                </div>

                <div className="aboutPhotos">
                    <ul className="photosList">
                        <li><a href="https://www.instagram.com/cassadie.gs/" target="_blank"><img className="aboutphoto1" src="cassita.jpg" /></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/maryikorch/" target="_blank"><img className="aboutphoto2" src="maria.jpg" /></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/maryikorch/" target="_blank"><img className="aboutphoto3" src="truck.jpg" /></a></li>
                    </ul>
                    <ul>
                        <li><a href="https://www.instagram.com/cassadie.gs/" target="_blank"><img className="aboutphoto4" src="cassita2.png" /></a></li>
                    </ul>



                </div>

            </div>


        </div>




    )
}