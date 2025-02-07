import Link from 'next/link'
import React from 'react'

const AuthNavbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="justify-center items-center space-x-3 flex">
                    <Link href="/">
                        <div className="bg-red-900 text-white p-2">Home</div>
                    </Link>
                    
                    <Link href="login">
                        <div className="bg-orange-700 text-white p-2">login</div>
                    </Link>
                    <Link href="register">
                        <div className="bg-orange-700 text-white p-2">register</div>
                    </Link>
                </div>
            </nav>
    </div>
  )
}

export default AuthNavbar