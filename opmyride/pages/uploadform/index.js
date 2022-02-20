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
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div>
      <center> 
      <div class="col-sm-12 my-auto">
        <img src={createObjectURL} width="640" height="360" className="imageUpload"/>
        <h4>Select Image</h4>
      </div>
      </center>
        <center><div>
          <label className="btn btn-primary" class="button-20" for="contained-button-file">
              Choose File
          </label>
          <input type="file"  style={{ display: 'none' }} id="contained-button-file" onChange={uploadToClient} />

        </div>
        <button className="btn btn-primary" class="button-20" type="submit"onClick={uploadToServer}>Upload Image</button>
        </center>
        </div>
        <center>
            <Link href="/loading">
              <button class="button-20" role="button">Transcribe!</button>
            </Link>
            </center>
      </div>
  );
}