import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Community() {
    return (
        <div className="background">
            <Head>
                <title>The Untold Story Project-- Community</title>
                <link rel="icon" href="/favicon.ico" />
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-RX3EQ6M4XE');
                </script>
            </Head>
            <div className="communityContainer">
                <Navbar />
                <div className="top-container">
                    <h1 className="communityTitle">The Untold Story Project</h1>
                    <div className="apply-to-podcast">
                        <p>Welcome to a community that values stories that often go untold in our homes— stories of abuse, trauma, narcissism-- the list goes on. Each guest has the option to remain anonymos so that the Untold Project can remaind a place of full freedom for all invovled. I'm thankful for each friend on our podcast and blog who has agreed to step out and share their story so that we may come together in community to feel seen, loved, educated, and to some extend understood.</p>
                        <p className="italics">Have an untold story you'd like to share?</p>
                        <div className="buttons">
                            <a href="https://mary230542.typeform.com/to/K55ckRqP" target="blank"><button >Apply to our podcast</button></a>
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
                        <p>I didn’t know there was something wrong. All I knew is that it wasn’t right— my life, the way I grew up.</p>
                        <p>Even after I left my house, the shame and confusion loomed over me for years. Was I crazy?  Perhaps I’m weak? Were the stories exaggerated in my head?</p>
                        <p>From what I could see, no one else lived like me. Not only was a prisoner to a narcissist, but I was also a prisoner to the confusion in my mind.</p>
                        <p>You mean your chest isn’t weighed down by cinderblocks of anxiety every time you walk into your house?</p>
                        <p>You mean the constant underlying anxiety wasn’t normal?</p>
                        <p>You mean crying to God for a different father wasn’t a universal experience?</p>
                        <p>It took me a while. Over two decades actually. To learn that my experience in life was something God didn’t want for me. That the pain I experienced was actually a problem, and even though it’s not the norm, and shouldn’t be, there were others out there who shared a similar experience.</p>
                        <p>Finding those people changed my life. If you identify with the above, I pray that you feel loved, seen, and understand that your experience is appreciated. And if you don’t, I hope your eyes are opened to hidden demons in our world.</p>

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