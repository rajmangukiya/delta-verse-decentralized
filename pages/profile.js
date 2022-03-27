import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import l from "../images/l.png";
import Image from 'next/image'
import Link from "next/link";
import Collection from './Collection';
import Navbar from './Navbar';
import Creation from './Creation';
import Footer from './Footer';

export default function profile () {
  return (
    <div class="bg-dark">
      <div class="card my-5 py-5">
        <Image
          src = {require('../images/wallpaper.jpg')}
          alt="Picture of the author"
          width={500}
          height={500}
        />
            {/* <Image 
              src={require('../images/collectibles.jpeg')} 
              class="img2 img-fluid img-thumbnail mx-auto jus" 
              width={50} 
              height={50} 
              alt="..." 
            />     */}
            {/* {/* <Image src={require('../images/l.png')} width={120} height={80} alt="Image Component" /> */}
        <img src={require('../images/music.jpg').default}  class="img2 img-fluid img-thumbnail mx-auto rounded mt-n1" width={100} height={100} alt="" /> 
      
        <div class="card-body bg-dark">
          <h5 class="card-title text-center text-light">Jack Aranda</h5>
          <p class="card-text text-center"><small class="text-muted">0x7739...29cb</small></p>
        </div>
      </div>
      <div class="container align-items-center bg-dark">
        <div class="row my-5">
          <div class="col-6 d-flex justify-content-center"> 
            <Link href="/collect">
              <a type="button" class="btn btn-outline-primary btn-lg m-3 px-4">
                Collected
              </a>
            </Link>
          </div>
          <div class="col-6 d-flex justify-content-center">
            <Link href="/create-nft">
              <a type="button" class="btn btn-outline-primary btn-lg m-3 px-4">
                Created
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <Creation />

    </div> 
  )
}
