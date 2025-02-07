import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="justify-center items-center space-x-3 flex">
                    <Link href="/">
                        <div className="bg-my_accept text-white p-2">Home</div>
                    </Link>
                    <Link href="about">
                        <div className="bg-my_accept text-white p-2">about</div>
                    </Link>
                    <Link href="blog">
                        <div className="bg-my_accept text-white p-2">blog</div>
                    </Link>
                    <Link href="login">
                        <div className="bg-my_accept text-white p-2">login</div>
                    </Link>
                    <Link href="register">
                        <div className="bg-my_accept text-white p-2">register</div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Hero