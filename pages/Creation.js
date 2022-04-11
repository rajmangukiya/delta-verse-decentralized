import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Image from 'next/image'
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Creation() {
  return (
    <div class="d-flex justify-content-center index">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 pt-5">
          <div class="col">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_7.png')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image
                src = {require('../images/art.jpg')}
                alt="Picture of the author"
                width={100}
                height={100}
                class="img2 img-fluid img-thumbnail rounded"
              />
              <div class="card-body">
                <h5 class="card-title text-center text-light">Collection 1</h5>
                <br />
                <p class="text-center text-primary">By Jack Aranda</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_8.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/music.jpg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              />
              <div class="card-body">
              <h5 class="card-title text-center text-light">Collection 2</h5>
                <br />
                <p class="text-center text-primary">By Jack Aranda</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_1.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/sport.jpeg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              /> 
              <div class="card-body">
              <h5 class="card-title text-center text-light">Collection 3</h5>
                <br />
                <p class="text-center text-primary">By Jack Aranda</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col my-3">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_10.png')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/photography.jpeg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              />
              <div class="card-body">
              <h5 class="card-title text-center text-light">Collection 4</h5>
                <br />
                <p class="text-center text-primary">By Jack Aranda</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col my-3">
            <div class="card bg-dark border-primary">
              <Image
                src = {require('../images/nft_2.jpg')}
                alt="Picture of the author"
                width={500}
                height={500}
                class="card-img-top"
              />
              <Image src={require('../images/collectibles.jpeg')} 
                class="img2 img-fluid img-thumbnail mx-auto rounded" 
                width={100} 
                height={100} 
                alt="..." 
              />      
              <div class="card-body">
              <h5 class="card-title text-center text-light">Collection 5</h5>
                <br />
                <p class="text-center text-primary">By Jack Aranda</p>
                <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
              </div>
            </div>
          </div>
          <div class="col my-3">
            <div class="card bg-dark border-primary">
            <Image
              src = {require('../images/nft_3.jpg')}
              alt="Picture of the author"
              width={500}
              height={500}
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
            <h5 class="card-title text-center text-light">Collection 6</h5>
                <br />
                <p class="text-center text-primary">By Jack Aranda</p>
              <p class="text-muted d-flex flex-start">Unique, fully 3D and built to unite the ape multiverse. <br />Designed and styled by Digimental.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}
