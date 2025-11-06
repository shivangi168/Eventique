import './globals.css'
import './force-styles.css'

export const metadata = {
  title: 'Eventique - Event Management Platform',
  description: 'Discover, create, and manage events with Eventique',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Roboto">
        {children}
      </body>
    </html>
  )
} 