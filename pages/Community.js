import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Community() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project-- Community</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <div className="communityContainer">
                <Navbar />
                <div className="top-container">
                    <h1 className="communityTitle">The Untold Story Project</h1>
                    <div className="apply-to-podcast">
                        <p>Welcome to a community that values stories that often go untold-- tories of abuse, trauma, broken relationships, and narcissism that exist behind the curtains of our homes. Each guest has the option to remain anonymous in oder to creae a space of full freedom. In this community I hope you feel seen, loved, educated, and to some extend understood.</p>
                        <p className="italics">Have an untold story you'd like to share? E-mail mary@theglobalu.org!</p>
                        <div className="buttons">
                            <a href="https://mary230542.typeform.com/to/YsY6gTYv" target="blank"><button >Get Updates</button></a>
                            <a target="blank" href="https://podcasts.apple.com/us/podcast/the-untold-story-project/id1536527419"><img className="podcastIcon" src="apple.png" /></a>
                            <a target="blank" href="https://open.spotify.com/show/5vUl6twP1NZZ1jxg74Qqwb?si=4jE2H3q6RSCXnJwFooh1pQ"><img className="podcastIcon" src="spotify.png" /></a>
                        </div>

                    </div>
                </div>

                <div className="blog-container">

                    <div className="line-container">
                        <img className="desktopline" src="line.png" />
                        <img className="mobileline" src="mobileline.png" />
                    </div>
                    <div className="poem-container">
                        <p>I didn’t know there was something wrong. All I knew is that something wasn’t right— my life, the way I grew up.</p>
                        <p>Even after I left my house, the shame and confusion loomed over me for years. Was I crazy? Perhaps I was weak? Were the stories exaggerated in my mind?</p>
                        <p>From what I could see, no one else lived like me. Not only did I feel that I was a prisoner to a narcissist, but I became a prisoner to the confusion in my mind.</p>
                        <p>You mean your chest isn’t weighed down by cinderblocks of anxiety every time you walk into your house?</p>
                        <p>You mean the constant underlying anxiety wasn’t normal?</p>
                        <p>You mean crying to God for a different father wasn’t a universal experience?</p>
                        <p>It took me a while, over 12 yers actually, to learn that pain in life was something God didn’t want for me. That the hurt I experienced was actually a problem, and even though it’s not the norm, and shouldn’t be, there were even others out there who shared a similar experience.</p>
                        <p>Finding those people changed my life. If you identify with the above, I pray that you feel loved, seen, and understand that your experience is appreciated. And if you don’t, I hope your eyes are opened to a new type of tragedy faced in our world.</p>

                    </div>
                    <div className="line-container" id="bottom-line">
                        <img className="desktopline" src="line.png" />
                        <img className="mobileline" src="mobileline.png" />
                    </div>
                </div>
            </div>


        </div>
    )
}