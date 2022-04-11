import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import l from "../images/l.png";
import Image from 'next/image'
import Link from "next/link";

export default function nftinfo () {
  return (
    <div class="index">
        <div class="container w-75">
            <div class="row py-5">
                <div class="col-6 p-auto m-auto d-flex justify-content-start ">
                    <div class="card">
                        <Image
                            src = {require('../images/nft_6.jpg')}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div class="col-6">
                    <h6 class="text-muted">
                        Collection 1
                    </h6>
                    <h2 class="text-white">
                        NFT #3
                    </h2>
                    <h6 class="text-muted">
                        owned by 864652
                    </h6>
                    <form>
                        <div class="mb-3">
                            <input type="text" placeholder='Enter price' class="form-control" id="price"/>
                        </div>
                    </form>
                    {/* <div class="bg-dark text-white w-75 p-3 my-5 border border-light rounded">
                        <h6 class="text-muted">Current price</h6>
                        <div class="row">
                            <div class="col-6">
                                <h3 class="text-white">100.00 @</h3>
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <h3 class="text-white">$241,395.00</h3>
                            </div>
                        </div>
                    </div> */}
                    <div class="row justify-content-start d-flex">
                        <div class="col">
                            <Link href="/create-nft">
                                <a type="button" class="btn-primary btn-outline-primary btn-lg text-dark" style={{ textDecoration : "none"}}>
                                    Sell now
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
        <div class="justify-content-center d-flex pb-3">
            <Link href="/create-nft">
                <a type="button" class="btn-primary btn-outline-primary btn-lg text-dark" style={{ textDecoration : "none"}}>
                    view collection
                </a>
            </Link>
        </div>
    </div>
  )
}
