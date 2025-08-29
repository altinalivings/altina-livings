import './globals.css'

export const metadata = {
  title: 'Altina Livings - Premium Construction & Interiors',
  description: 'Crafting timeless spaces for modern living. Premium construction and interior design services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
