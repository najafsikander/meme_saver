
import Head from 'next/head';
import Header from '../header';
import Script from 'next/script';

export default function Layout({ children, layoutMode }: { children: React.ReactNode, layoutMode: Number }) {
  return (
    <div>
        <Head>
        <title>Meme Vault</title>
        <meta name="description" content="An archive app to save and share memes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload"/>
      {/* For index & Auth Pages */}
      {
        layoutMode === 0 &&
        <main>{children}</main>
      }

      {/* Logged in pages */}
      {
        layoutMode === 1 &&
        <main>
          <Header/>
          {children}
        </main>
        
      }
    </div>
  )
}
