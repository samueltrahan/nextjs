import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        Samuel's Next App
      </nav>

      <main className={styles.main}>
        
        
      </main>

      <footer className={styles.footer}>
        Powered By: &nbsp;
       <a
       href="https://www.samueltrahan.com"
       >
         Samuel Trahan
       </a>
      </footer>
    </div>
  )
}
