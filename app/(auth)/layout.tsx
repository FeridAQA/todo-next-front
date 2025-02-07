import React from 'react'
import AuthNavbar from '../components/authNavbar/page'
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
        
        <AuthNavbar></AuthNavbar>
            {children} 
        </>
    )
}
