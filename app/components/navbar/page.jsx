import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div>
            <nav className="navbar mb-3 navbar-expand-lg navbar-light bg-light fixed z-10 bg-black">
                <div className="justify-center items-center space-x-3 flex">
                    <Link   href="/">
                        <div className="bg-my_accept text-white p-2">Home</div>
                    </Link>
                    <Link scroll={false} href="/about">
                        <div className="bg-my_accept text-white p-2">about</div>
                    </Link>
                    <Link  replace	href="/blog">
                        <div className="bg-my_accept text-white p-2">blog</div>
                    </Link>
                    <Link href="/login">
                        <div className="bg-my_accept text-white p-2">login</div>
                    </Link>
                    <Link href="/register">
                        <div className="bg-my_accept text-white p-2">register</div>
                    </Link>
                    <Link href="/rout">
                        <div className="bg-my_accept text-white p-2">ROUT</div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Hero