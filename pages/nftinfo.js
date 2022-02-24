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

export default function nftinfo () {
  return (
    <div class="bg-dark">
      <Navbar />
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
        <div class="col my-3">
            <div class="card bg-dark border-primary">
                <Image
                    src = {require('../images/allmonkey.jpg')}
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    class="card-img-top"
                />
                <Image 
                    src={require('../images/collectibles.jpeg')} 
                    class="img2 img-fluid img-thumbnail mx-auto rounded" 
                    width={100} 
                    height={100} 
                    alt="..." 
                />      
                <div class="card-body">
                    <h5 class="card-title text-center text-light">Colection 1</h5>
                    <br />
                    <p class="text-muted text-center">By Jack Aranda</p>
                </div>
            </div>
        </div>
        <div class="container bg-dark">
            <div class="row justify-content-md-center p-2 mx-auto">
                <div class="col-1 d-flex justify-content-md-center text-white border border-info mx-1">
                    8.0K <br />
                    items
                </div>
                <div class="col-1  d-flex justify-content-md-center text-white border border-info mx-1">
                    6.3K <br/>
                    owners
                </div>
                <div class="col-1  d-flex justify-content-md-center text-white border border-info mx-1">
                    7.5K
                    {/* <Image
                        src = {require('../images/art.jpg')}
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    /> */}
                    <br />
                    floor price
                </div>
                <div class="col-1  d-flex justify-content-md-center text-white border border-info mx-1">
                    100K
                    {/* <Image
                        src = {require('../images/art.jpg')}
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />  */}
                    <br />
                    ceil price
                </div>
                <div class="col-1  d-flex justify-content-md-center text-white border border-info mx-1">
                    15.2K <br />
                    total volume
                </div>
            </div>
        </div>
        <div class="my-5">
            <h4 class="text-center text-light text-muted">8K NEXT-GENERAION, HIGH FASHION HAPES</h4>
            <br />
            <h4 class="text-center text-light text-muted">Unique, fully 3D and built to unite the  ape multiverse. Designed and styled by Digimental.</h4> 
        </div>

        <Collection />
    </div> 
  )
}
