import './globals.css'

export const metadata = {
  title: '이력서 - 웹 개발자 포트폴리오',
  description: 'TypeScript와 React를 사용한 웹 개발자 이력서 및 포트폴리오',
}

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="ko">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
} 