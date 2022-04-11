import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image'
import Link from "next/link";
import Footer from './Footer';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js"
></script>
export default () => {
  return (
    <div class="index">

{/* ------------------------------------------------- */}
      <div class="container w-75">
        <div class="row">
          <div class="col m-auto p-auto">
            <h1 class="primary text-light fs-1">
                Create, Buy & Sell Awesome Arts <br/>
                <small class="text-muted fs-3">
                  Delta Verse is a virtual market place to sell and buy art works
                </small>
            </h1>
            <div class="container align-items-center">
              <div class="row justify-content-center d-flex align-items-end">
                <div class="col-4">
                  {/* <a type="button" class="btn btn-outline-primary btn-lg m-3 px-4" href='create'>Create</a> */}
                  <Link href="/create-nft">
                    <a type="button" class="btn-lg btn-primary m-3 px-4 text-dark" style={{textDecoration : "none"}}>
                      Create
                    </a>
                  </Link>
                </div>
                <div class="col-4"> 
                  <a type="button" class="btn-lg btn-primary m-3 px-4 text-dark" style={{textDecoration : "none"}} href='explore'>
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div class="col p-auto m-auto d-flex justify-content-end">
      <div class="card w-75 h-75">
      <Image
        src = {require('../images/index.jpg')}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div class="card-body bg-dark">
      <Link href="/">
        <a class="navbar-brand text-light px-3 mx-2">
          <Image
            src = {require('../images/index_1.png')}
            alt="Picture of the author"
            width={30}
            height={30}
          />
          Delta Verse
        </a>
      </Link>
      <a class="navbar-brand text-light px-3 mx-2">
        10.0
          <Image
            src = {require('../images/eth.png')}
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </a>
      </div>
      </div>
    </div>
  </div>
  </div>
{/* ---------------------------------------------- */}

  <div class="my-5">
    <h1 class="text-center text-light fs-2">Browse by category</h1>
  </div>

{/* ------------------------------------------------ */}
<div class="mx-3">
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card w-100 h-75">
    <Image
      src = {require('../images/art.jpg')}
      alt="Picture of the author"
      // width={500}
      // height={500}
    />
      {/* <img src={i} class="card-img-top" alt="..." /> */}
      <div class="card-body bg-dark d-flex justify-content-center align-items-end">
        <h5 class="card-title text-center text-light">Art</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-100 h-75">
    <Image
      src = {require('../images/music.jpg')}
      alt="Picture of the author"
      // width={500}
      // height={500}
    />
    <div class="card-body bg-dark d-flex justify-content-center align-items-end">
        <h5 class="card-title text-center text-light">Music</h5>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card w-100 h-75">
    <Image
      src = {require('../images/photography.jpg')}
      alt="Picture of the author"
      class="bg-info"
      // width={500}
      // height={500}
    />
    <div class="card-body bg-dark d-flex justify-content-center align-items-end">
        <h5 class="card-title text-center text-light">Photography</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-100 h-75">
    <Image
      src = {require('../images/sports.jpg')}
      alt="Picture of the author"
      // width={500}
      // height={500}
    />
    <div class="card-body bg-dark d-flex justify-content-center align-items-end">
        <h5 class="card-title text-center text-light">Sports</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-100 h-75">
    <Image
      src = {require('../images/collectibles.png')}
      alt="Picture of the author"
      // width={500}
      // height={500}
    />
    <div class="card-body bg-dark d-flex justify-content-center align-items-end">
        <h5 class="card-title text-center text-light">Collectibles</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-100 h-75">
    <Image
      src = {require('../images/domain.jpg')}
      alt="Picture of the author"
      // width={500}
      // height={500}
    />
    <div class="card-body bg-dark d-flex justify-content-center align-items-end">
        <h5 class="card-title text-center text-light">Domain Names</h5>
      </div>
    </div>
  </div>
</div>
</div>

{/* --------------------------------------------------- */}

</div>
  )
}
 