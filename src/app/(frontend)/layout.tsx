import React from 'react'
import './styles.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlogApp - Your Next.js Blog',
  description: 'A modern blog built with Next.js and PayloadCMS',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-gray-600">
              © 2024 BlogApp. Built with Next.js and PayloadCMS.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}