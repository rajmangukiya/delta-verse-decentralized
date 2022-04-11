import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Footer from './Footer';
import Image from 'next/image'

export default function Explore() {
  return (
    <div class="index">
      <h1 class="text-center text-light pt-2 pb-5">Explore Collections</h1>
      <div class="container my-5 mx-auto d-flex justify-content-around" >
        <Link href="/" class="link">
          <a class="p-3 border border-white text-white" style={{textDecoration: "none"}} href="#" role="button">Photography</a>
        </Link>
        <Link href="#">
          <a class="p-3 border border-white text-white" style={{textDecoration: "none"}} href="#" role="button">Music</a>
        </Link>
          <a class="p-3 border border-white text-white" style={{textDecoration: "none"}} href="#" role="button">Art</a>
        <Link href="#">
          <a class="p-3 border border-white text-white" style={{textDecoration: "none"}} href="#" role="button">Sports</a>
        </Link>
        <Link href="#">
          <a class="p-3 border border-white text-white" style={{textDecoration: "none"}} href="#" role="button">Collectibles</a>
        </Link>
      </div>
{/* ---------------------------------------------- */}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 pt-5">
          <div class="col">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_1.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top img1"
              />
              <Image
                src = {require('../images/nft_1.jpg')}
                alt="Picture of the author"
                width={100}
                height={100}
                class="img-fluid img-thumbnail mx-auto rounded"
                style={{}}
              />
              {/* <Image src = {require('../images/nft_1.jpg')} alt="Avatar" class="avatar"></Image> */}
              {/* <img src="../images/nft_1.jpg" class="img-fluid img-thumbnail mx-auto rounded" style={{}} width={50} height={50}/> */}
              {/* <Image
                src = {require('../images/nft_1.jpg')}
                alt="Picture of the author"
                width={100}
                height={100}
                class="thumb-image mt-n3"
              /> */}
              <div class="card-body">
                <h5 class="card-title text-center text-light">HAPE Prime</h5>
                <br />
                <p class="text-center text-primary">By HAPEBEAST</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_2.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/nft_1.jpg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              />
              <div class="card-body">
                <h5 class="card-title text-center text-light">HAPE Prime</h5>
                <br />
                <p class="text-center text-primary">By HAPEBEAST</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_3.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/nft_1.jpg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              /> 
              <div class="card-body">
                <h5 class="card-title text-center text-light">HAPE Prime</h5>
                <br />
                <p class="text-center text-primary">By HAPEBEAST</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col my-3">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_4.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/nft_1.jpg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              />
              <div class="card-body">
                <h5 class="card-title text-center text-light">HAPE Prime</h5>
                <br />
                <p class="text-center text-primary">By HAPEBEAST</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col my-3">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_5.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/nft_1.jpg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              />      
              <div class="card-body">
                <h5 class="card-title text-center text-light">HAPE Prime</h5>
                <br />
                <p class="text-center text-primary">By HAPEBEAST</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col my-3">
            <div class="card bg-dark border-primary">
            <Image
              src = {require('../images/nft_6.jpg')}
              alt="Picture of the author"
              width={500}
              height={500}
              class="card-img-top"
            />
            <Image 
              src={require('../images/nft_1.jpg')} 
              class="img2 img-fluid img-thumbnail mx-auto rounded" 
              width={100} 
              height={100} 
              alt="..." 
            />      
            <div class="card-body">
              <h5 class="card-title text-center text-light">HAPE Prime</h5>
              <br />
              <p class="text-center text-primary">By HAPEBEAST</p>
              <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

