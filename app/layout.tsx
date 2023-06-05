import './globals.css'
import { Figtree} from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
const font = Figtree({ subsets: ['latin'] })
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'


export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen To Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
              <Sidebar>
                {children}
                </Sidebar>
            
            
            </UserProvider>
          
          
        </SupabaseProvider>
        
        
        </body>
    </html>
  )
}
