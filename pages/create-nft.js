import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import l from '../images/l.png';
import Link from "next/link";
import Image from 'next/image'

export default function Create() {
    return (
        <div class="bg-dark">
            <Navbar />
            <div class="container w-50">
                <div class="row">
                    <div class="col pt-5">
                        <h1 class="primary text-primary pb-5">
                            Connect your wallet <br/>
                            <small class="text-muted ">to use this functionality <br />no account? create new one</small>
                        </h1>
                        <Link href="/nft">
                            <a class="btn btn-primary border-primary px-5" type="button">
                            <Image
                                src = {l}
                                alt="Picture of the author"
                                width={30}
                                height={30}
                                class="d-inline-block align-text-top"
                            />
                           MetaMask
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}