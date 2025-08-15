import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Miller's Workbench",
  description: "Handy, reliable home & business repair — the small jobs other contractors won't touch.",
  generator: "Miller's Workbench Site",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  --font-sans: ui-sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
