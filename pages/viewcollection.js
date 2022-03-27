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

export default function viewcollection () {
  return (
    <div class="bg-dark">
        <div class="col my-3">
            <div class="card bg-dark border-primary">
                <Image
                    src = {require('../images/art.jpg')}
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
        <div class="row">
            <div class="col-3 border border-white p-4">
                <form class="flex-fill">
                    <input class="form-control me-2 my-3 py-2" type="search" placeholder="@ Search" aria-label="Search" /> 
                    <label for="price" class="text-white d-flex justify-content-center">Price</label>
                    <select class="form-select" id="price" aria-label="Default select example">
                        <option selected>Ether</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <label for="min" class="form-label text-white py-2">Min range</label>
                    <input type="range" class="form-range" id="min"></input>
                    <label for="max" class="form-label text-white py-2">Max range</label>
                    <input type="range" class="form-range" id="max"></input>                    
                </form>
            </div>
            <div class="col-9 border border-white p-4">
                <Collection />
            </div>
        </div>
    </div> 
  )
}
