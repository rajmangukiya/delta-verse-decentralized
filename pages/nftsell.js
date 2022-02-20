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
import Footer from './Footer';
import Creation from './Creation';

export default function nftinfo () {
  return (
    <div class="bg-dark">
        <Navbar />
        <div class="container w-75">
            <div class="row py-5">
                <div class="col-6 p-auto m-auto d-flex justify-content-start ">
                    <div class="card">
                        <Image
                            src = {require('../images/art.jpg')}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div class="col-6">
                    <h6 class="text-muted">
                        HAPE Prime
                    </h6>
                    <h2 class="text-white">
                        HAPE #108
                    </h2>
                    <h6 class="text-muted">
                        owned by 864652
                    </h6>
                    <div class="bg-dark text-white w-75 p-3 my-5 border border-light rounded">
                        <h6 class="text-muted">Current price</h6>
                        <div class="row">
                            <div class="col-6">
                                <h3 class="text-white">100.00 @</h3>
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <h3 class="text-white">$241,395.00</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-start d-flex">
                        <div class="col">
                            <Link href="/create-nft">
                                <a type="button" class="btn btn-outline-primary btn-lg">
                                    Buy now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 d-flex justify-content-start p-auto">
                    <div class="bg-dark text-white p-3 border border-light rounded">
                        <h5 class="text-white">Description</h5>
                        <h6 class="text-muted">Unique, fully 3D and built to unite the ape multiverse. <br />
                        Designed and styled by Degimental.</h6>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-6 d-flex justify-content-start p-auto">
                    <div class="bg-dark text-white p-3 border border-light rounded">
                        <h5 class="text-white">Rarity</h5>
                        <h6 class="text-muted">28</h6>
                    </div>
                </div>
            </div> 
        </div>
        <div class="container w-75 my-5">
            <div class="table-responsive">
                <h4 class="d-flex justify-content-center py-2 text-white">Activity</h4>
                <table class="table border border-white caption-top">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Event</th>
                            <th scope="col">Price</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody class="table-dark text-muted">
                        <tr>
                            <th scope="row">Sale</th>
                            <td>80.00 @</td>
                            <td>0x1234567891234567890</td>
                            <td>0x1234567891234567890</td>
                            <td>20/02/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">Sale</th>
                            <td>80.00 @</td>
                            <td>0x1234567891234567890</td>
                            <td>0x1234567891234567890</td>
                            <td>20/02/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">Sale</th>
                            <td>80.00 @</td>
                            <td>0x1234567891234567890</td>
                            <td>0x1234567891234567890</td>
                            <td>20/02/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">Sale</th>
                            <td>80.00 @</td>
                            <td>0x1234567891234567890</td>
                            <td>0x1234567891234567890</td>
                            <td>20/02/2022</td>
                        </tr>
                        <tr>
                            <th scope="row">Sale</th>
                            <td>80.00 @</td>
                            <td>0x1234567891234567890</td>
                            <td>0x1234567891234567890</td>
                            <td>20/02/2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="justify-content-center d-flex">
            <Link href="/create-nft">
                <a type="button" class="btn btn-outline-primary btn-lg">
                    view collection
                </a>
            </Link>
        </div>
        <Footer />    
    </div>
  )
}
