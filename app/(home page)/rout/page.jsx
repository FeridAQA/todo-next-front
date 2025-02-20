import Link from 'next/link'
import React from 'react'

const Rout = () => {
    return (
        <div>
            <Link href='/about' >about</Link>
            <br />
            <br />
            <br />
            <Link href={{
                pathname: '/about',
                query: {
                    name: 'John'
                    , surname: "Done"
                },
            }} >about</Link>
        </div>
    )
}

export default Rout