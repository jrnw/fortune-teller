import Footer from './footer'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

type LayoutProps = {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fortune Teller</title>
        <meta name="description" content="A real fortune teller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
