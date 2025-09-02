import './globals.scss'

export const metadata = {
  title: 'Next.js 애플리케이션',
  description: 'Next.js 14 boilerplate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
