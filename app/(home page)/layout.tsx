import React from 'react'
import AuthNavbar from '../components/authNavbar/page'
import Hero from '../components/navbar/page'
export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
        
        <Hero></Hero>
            {children} 
        </>
    )
}
