import Link from 'next/link';

export default function SideNav() {
    return (
        <div className="sideNavContainer">
            <ul>
                <li><div className="sideHomeLine">
                </div></li>
                <li><Link href="/About">
                    <a title="About"><p className="navTitle">About</p></a>
                </Link></li>

            </ul>


        </div>
    )
}

