import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [characters, setCharacters] = useState([]);


 const getCharacter = () => {
    axios.get(`/api/hello`)
    .then((response) => {
      console.log(response.data)
      setCharacter(response.data.results)
    })
    .catch((err) => console.log(err))
  }
 

  useEffect(() => {
    getCharacter()
  },[characters])

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
