
import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import { storeId } from '@/lib/utils'
import Theme from './theme.'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
    params: {
    storeId: string;
    },
}) {
  
  return (
    <html lang="en">
      <body className={font.className}>
        <Theme />
        <ToastProvider />
        <ModalProvider />
        <Navbar storeId={storeId} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
