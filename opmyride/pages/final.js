import Image from 'next/image'
import Link from "next/link";
import {bgWrap} from '../styles/Home.module.css';
import styled from "styled-components";
import { StyledLink } from "baseui/link";

function Final() {
    return <div>
        <div className={bgWrap}>
        <Image
          alt="travel"
          src="/indexback.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
        <center><img src="/happybear.jpg" width="640" height="360"/></center>
        <center><h2>Final Page</h2></center>

        <ul>
          <li>
            <StyledLink href="/">
              <a>Return Home</a>
            </StyledLink>
          </li>
          
        </ul>

        </div>
        
  }
  
  export default Final