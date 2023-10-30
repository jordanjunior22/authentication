import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
        <ClerkProvider>
            <body>{children}</body>
        </ClerkProvider>

  )
}
