import Link from 'next/link';
import React, { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (

        <div className="rotate" id="navbar">
            <div className="desktopNav">

                <Link href="/Community">
                    <a title="Community"><h1>Community</h1></a>
                </Link>
                <Link href="/Art">
                    <a title="Art"><h1>Art</h1></a>
                </Link>
                <Link href="/Story">
                    <a title="Story"><h1>Story</h1></a>
                </Link>
            </div>
            <div className="mobileNav">
                <div id="panel">
                    <button className="menu-button" onClick={() => { setOpen(!open) }}><img className="open" src="white-menu.png" /></button>
                    {(open) &&
                        <div id="vertical-options-full">
                            <div className="list">
                                <Link href="/index">
                                    <a title="Home"><h1 onClick={() => { setOpen(false) }}>Home</h1></a>
                                </Link><Link href="/Story">
                                    <a title="Story"><h1 onClick={() => { setOpen(false) }}>Story</h1></a>
                                </Link>
                                <Link href="/Community">
                                    <a title="Community"><h1 onClick={() => { setOpen(false) }}>Community</h1></a>
                                </Link>
                                <Link href="/Art">
                                    <a title="Art"><h1 onClick={() => { setOpen(false) }}>Art</h1></a>
                                </Link>


                                <p>©The Untold Project 2020</p>
                            </div>
                        </div>
                    }



                </div>
            </div>
        </div>
    )
}