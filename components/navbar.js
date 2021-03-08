import Link from 'next/link';
import React, { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (

        <div className="rotate" id="navbar">
            <div className="desktopNav">
                <Link href="/">
                    <a title="Home"><img className="logo" src="samplelogo.png" /></a>
                </Link>

                <Link href="/Stories">
                    <a title="Stories">Stories</a>
                </Link>
                <Link href="/Art">
                    <a title="Art">Art</a>
                </Link>
                <Link href="/SheSawInColor">
                    <a title="SheSawInColor">Book</a>
                </Link>
            </div>
            <div className="mobileNav">
                <div id="panel">
                    <button className="menu-button" onClick={() => { setOpen(!open) }}><img className="open" src="white-menu.png" /></button>
                    {(open) &&
                        <div id="vertical-options-full">
                            <div className="list">
                                <Link href="/">
                                    <a title="index"><h1 onClick={() => { setOpen(false) }}>Home</h1></a>
                                </Link><Link href="/SheSawInColor">
                                    <a title="SheSawInColor"><h1 onClick={() => { setOpen(false) }}>Book</h1></a>
                                </Link>
                                <Link href="/Stories">
                                    <a title="Stories"><h1 onClick={() => { setOpen(false) }}>Stories</h1></a>
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