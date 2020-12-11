import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Containerized Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Simple Containerized Next App</h1>

        <p className={styles.description}>
          I am built on Next JS (with Typescript). I've been Containerized with Docker and I run on Google Kubernetes Engine.
        </p>

        <p>This app is purely for practise with building a highly (and easily) scalable web app.</p>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </p>
        <p>
          <img src="/tsx.svg" alt="TypeScript Logo" className={styles.logo} />
          <img src="/docker.svg" alt="Docker Logo" className={styles.logo} />
          <img src="/GKE.png" alt="GKE Logo" className={styles.logo} />
        </p>
      </footer>
    </div>
  )
}
