import Head from 'next/head';
import NewNav from '../components/NewNav';
import SideNav from '../components/SideNav';

export default function Roadmap() {
    return (
        <div className="background1">
            <Head>
                <title>The Untold Story Project- Roadmap</title>
                <link rel="icon" href="/favicon.ico" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-RX3EQ6M4XE"></script>

            </Head>
            <NewNav />
            <SideNav />
            <div className="roadmapContainer">
                <div className="roadmapFlex">
                    <div>
                        <h1 className="roadmapheadline">Roadmap</h1>
                        <h2 className="roadmapdescription">We have many "untold" surprises up our sleave, but we'll let you know where we're headed.</h2>
                    </div>
                    <div className="roadmap-list">
                        <h4>1.Launch Untold Story Project Podcast</h4>
                        <p className="roadmapline">
                            Each month, we’ll invite a member of the Untold community to share their story on our podcast.
                        </p>
                        <h4>2. Discord Community</h4>
                        <p>Join a community of people who are committed to supporting mental health. We’ll offer helpful resources so that members of our community can be educated on topics related to mental health that are often over-looked.</p>
                        <h4>3. Public Mint</h4>
                        <p>The Untold has written an album called The Soundtrack of Color. The whole song collection is dedicated to the journey of overcoming mental illness and the affects of growing up in an abusive family situation. We're excited to create an NFT project based on the lyrics to the collection.</p>
                        <h4>4. Book Publication</h4>
                        <p>The collection of songs has inspired a novel! Check out the story of Leah Blitz here.</p>
                        <h4>5. Record Release</h4>
                        <p>Full production of The Soundtrack of Color! We have some exciting ideas to invite our community into the production process.</p>
                    </div>
                    <div classname="umbrellaDiv">
                        <img className="musicPhoto" src="umbrella.png" />
                    </div>
                </div>
            </div>


        </div>




    )
}