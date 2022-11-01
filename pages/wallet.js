import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import l from '../images/l.png';
import Link from "next/link";
import Image from 'next/image'
import Footer from './Footer';

export default function Create() {

    const router = useRouter()

    const connectWallet = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", []);
        router.push('/create-nft')
    }

    return (
        <div class="bg-dark">
            <div class="container w-50">
                <div class="row">
                    <div class="col pt-5">
                        <h1 class="primary text-primary pb-5">
                            Connect your wallet <br />
                            <small class="text-muted ">to use this functionality <br />no account? create new one</small>
                        </h1>
                        <div onClick={connectWallet}>
                            <a class="btn btn-primary border-primary px-4" type="button">
                                <Image
                                    src={require('../images/MetaMask_Fox.png')}
                                    alt="Picture of the author"
                                    width={50}
                                    height={50}
                                    class="d-inline-block align-text-top"
                                />
                                MetaMask
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}