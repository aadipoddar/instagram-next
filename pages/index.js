import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instagram Clone in Next JS" />
        <link rel="icon" href="/InstagramLogo.png" />
      </Head>

      <Header />
      <Feed />

    </div>
  )
}
