import { useState } from "react";
import Link from "next/link";
import {bgWrap} from '/styles/Home.module.css';
import Head from 'next/head'
import Image from 'next/image'



export default function PrivatePage(props) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {        
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);    
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };

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
      <div>
      
        <img src={createObjectURL} width="640" height="360" className="rounded-full"/>
          
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Upload Image
        </button>

        

      </div>
      <ul>
          <li>
            <Link href="/loading">
              <a>Transcribe Image</a>
            </Link>
          </li>
          
        </ul>
        

      <footer>
      <a href="https://www.freepik.com/vectors/banner">Banner vector created by starline - www.freepik.com</a>
      </footer>

    </div>
  );
}