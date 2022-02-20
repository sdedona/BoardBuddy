import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

import {bgWrap} from '../styles/Home.module.css';




export default function Home() {
  return (
    <div>
      <div className={bgWrap}>
        <Image
          alt="travel"
          src="/indexback.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
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
      <a href="http://www.freepik.com">Designed by kjpargeter / Freepik</a>
      
      </footer>
      
    </div>
    
  )
}
