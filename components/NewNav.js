import Link from 'next/link';

export default function NewNav() {
    return (
        <div className="navContainer">
            <ul className="main-nav">
                <li><Link href="/">
                    <a title="Home"><img className="navIcon" src="logo.png" /></a>
                </Link></li>

                <li>
                    <div className="homeLine"></div>
                </li>

                <li><Link href="/SheSawInColor">
                    <a title="SheSawInColor"><img className="navIcon" src="bookIcon.png" /></a>
                </Link></li>

                <li><Link href="/Stories">
                    <a title="Stories"><img className="navIcon" src="podcastIcon.png" /></a>
                </Link></li>

                <li><Link href="/About">
                    <a title="Music"><img className="navIcon" src="info.png" /></a>
                </Link></li>

            </ul>

        </div>
    )
}