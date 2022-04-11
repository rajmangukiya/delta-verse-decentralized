import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import l from '../images/l.png';
import Link from "next/link";
import Image from 'next/image'
import Footer from './Footer';

export default function Create() {
    return (
        <div class="index">
            <div class="container w-50 connect">
                <div class="row">
                    <div class="col pt-5">
                        <h1 class="text-light pb-5">
                            Connect your wallet <br/>
                            <small class="text-muted fs-3">to use this functionality <br />no account? create new one</small>
                        </h1>
                        <Link href="/nft">
                            <a class="btn-dark d-flex w-50 btn-block border-primary create-btn p-2 m-3" style={{ textDecoration : "none" }} type="button">
                            <Image
                                src = {require('../images/MetaMask_Fox.png')}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                class="d-inline-block align-text-top"
                            />
                           <p class="d-flex mx-4 text-white fs-3">MetaMask</p>
                           {/* <ext class="d-flex px-5">MetaMask</ext> */}
                            </a>
                        </Link>
                        {/* <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button> */}

                    </div>
                </div>
            </div>
        </div>
    )
}