import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import Navbar from './Navbar';
import Image from 'next/image'
import Link from "next/link";

export default function nft() {
  return (
    <div>
        <Navbar />
        <div class="container bg-dark text-light w-50">
            <h1 class="text-center py-3">Create new NFT</h1>
            <br />  
            <form>
                <div class="row mb-3">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="image" class="col-sm-2 col-form-label">Image</label>
                    <div class="col-sm-10">
                        <label role="button" tabindex="0" for="image" class="col-sm-2 col-form-label">
                        <Image
                            src = {require('../images/MetaMask_Fox.png')}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                            class="d-inline-block align-text-top"
                        />
                        </label>
                            <input type="file" class="form-control d-none" id="image" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="description" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                        <textarea class="form-control" rows="3" id="description" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="link" class="col-sm-2 col-form-label">External Link</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="link" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="collection" class="col-sm-2 col-form-label">Collection</label>
                    <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>select collection</option>
                            <option value="collection_1">collection 1</option>
                            <option value="collection_2">collection 2</option>
                            <option value="collection_3">collection 3</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="rarity" class="col-sm-2 col-form-label">Rarity</label>
                    <div class="col-sm-10">
                        <input type="range" class="form-range" id="customRange1" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="collection" class="col-sm-2 col-form-label">Blockchain</label>
                    <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>select collection</option>
                            <option value="collection_1" data-thumbnail='../images/art.jpg'>Ethereum</option>
                            <option value="collection_2">collection 2</option>
                            <option value="collection_3">collection 3</option>
                        </select>
                    </div>
                </div>
                <div class="d-grid col-2 mx-auto">
                    <Link href="/">
                        <a type="submit" class="btn btn-primary" type="button" href='/'>Create</a>
                    </Link>
                </div>
            </form> 
        </div>
    </div>
    )
}
