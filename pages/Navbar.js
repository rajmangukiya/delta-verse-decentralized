import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import l from "../images/l.png";
import Image from 'next/image'
import Link from "next/link";
// $enable-negative-margins : true
export default function Navbar(){
    return (
      <div class="bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light text-light">
          <div class="container-fluid mx-5 my-n5">
            <Link href="/">
              <a class="navbar-brand text-light px-3 mx-2 fs-2">
                <Image
                  src = {l}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
                Delta Verse
              </a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>          
            <div class="collapse navbar-collapse mx-5" id="navbarTogglerDemo02">
              <form class="flex-fill input-group">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="search" class="form-control me-2" placeholder="search" aria-label="search"/>
              </form>
              <ul class="navbar-nav bg-dark mb-lg-0 mx-5 px-4">
                <li class="nav-item m-2 pr-3">
                  <Link href="/explore">
                    <a class="nav-link text-light fs-5" aria-current="page">Explore</a>
                  </Link>
                </li>
                <li class="nav-item m-2 px-3">
                  <Link href="#">
                    <a class="nav-link text-light fs-5">State</a>
                  </Link>
                </li>
                <li class="nav-item m-2 pl-3">
                    <Link href="create-nft">
                    <a class="nav-link text-light fs-5">Create</a>
                  </Link>
                </li>
              </ul>
              
            </div>
            <Link href="/create-nft">
                <svg xmlns="http://www.w3.org/2000/svg" class="nav-item" width="48" height="36" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
                </svg>
            </Link>
            
            <div class="dropdown mx-4">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://www.leisureopportunities.co.uk/images/995586_746594.jpg"
                  class="rounded-circle mt-2"
                  height="55"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end bg-dark border border-primary"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item text-center bg-dark text-white fs-5" href="/profile">Profile</a>
                </li>
                <li>
                  <a class="dropdown-item text-center py-2 border border-primary bg-dark text-white fs-5" href="/mycollection">My collections</a>
                </li>
                <li>
                  <a class="dropdown-item text-center border py-2 border-primary bg-dark text-white fs-5" href="/mynft">My NFTs</a>
                </li>
                <li>
                  <a class="dropdown-item text-center bg-dark text-white fs-5" href="#">Log out</a>
                </li>
              </ul>
            </div>
          </div>  
      </nav>
      {/* <div class="bg-light w-25"> </div> */}
      {/* <hr class="bg-light border-1 border-top border-light"></hr> */}
        {/* -------------------- */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js"
        ></script>
    </div>
  )
}

