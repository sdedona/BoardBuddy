import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Home() {
  return (
    <div>
      
      <Head>
        <title>Boardbuddy Homepage</title>
        <meta name="description" content="A web-based board transcriber and translator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      
     
      <main className={styles.main}>
        
        <h1 className={styles.title}>
          BoardBuddy 
        </h1>

        <p className={styles.description}>
          Get started by uploading a board photo!
        </p>

        <ul>
          <li>
            <Link href="/uploadform">
              <a>Get Started</a>
            </Link>
          </li>
          
        </ul>
      

      
      </main>
      


      

      
      <footer>
      <a href="https://www.freepik.com/vectors/banner">Banner vector created by starline - www.freepik.com</a>
      </footer>
      
    </div>
    
  )
}
