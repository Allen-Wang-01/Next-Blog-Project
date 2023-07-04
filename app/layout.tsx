import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Allen's Blog",
  description: 'Created by create Allen Wang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
