import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Relationship Conflict Navigator',
  description: 'Navigate difficult conversations with your partner using our conflict resolution templates',
  keywords: ['relationship', 'conflict', 'resolution', 'communication', 'templates'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-neutral-100 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-neutral-600">© {new Date().getFullYear()} Relationship Conflict Navigator</p>
            <p className="text-neutral-500 text-sm mt-2">Helping couples communicate better, one conversation at a time</p>
          </div>
        </footer>
      </body>
    </html>
  )
}