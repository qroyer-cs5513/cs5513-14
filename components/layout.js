import Head from 'next/head';
import Link from 'next/link';

export default function Layout( {children, home} ) {
  return (
    <div>
      <Head>
        <title>WordPress Data</title>
      </Head>
      <header>
        <h1>WordPress Data</h1>
        <p className="navigationBar">[ <Link href="/">Microposts</Link> | <Link href="/events">Events</Link> | <Link href="/degrees">Degrees</Link> ]</p>
        <hr/>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
