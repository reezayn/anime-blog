import Banner from '@/components/Banner'
import Header from '@/components/Header'
import '../globals.css'

export const metadata = {
  title: 'Rijan Anime Blog',
  description: 'BY RIJAN SHRESTHA',
  icons: {
    icon: '/logo.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-6xl mx-auto'>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
