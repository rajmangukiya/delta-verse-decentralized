import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Footer from './Footer';
import Image from 'next/image'
import { collectionAddress } from '../config.js'

import Collection from '../artifacts/contracts/Collection.sol/Collection.json'
import { useRouter } from 'next/router';


let provider, signer, collectionContract;

export default function Explore() {

  // const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState(1)
  const categories = [
    { name: 'photography', categoryId: 1 },
    { name: 'Music', categoryId: 2 },
    { name: 'Arts', categoryId: 3 },
    { name: 'Sports', categoryId: 4 },
    { name: 'Collectibles', categoryId: 5 },
  ]
  const [collections, setCollections] = useState([])

  const router = useRouter()

  const handleCategory = (_categoryId) => {
    setCategoryId(_categoryId)
    getCollection(_categoryId)
  }

  const getCollection = async (_collectionId) => {
    let data = await collectionContract.fetchCategoryCollection(_collectionId, 10, 1)
    data = data
      .filter(x => x[0].toNumber())
      .map(x => {
        return {
          collectionId: x.collectionId,
          name: x.name,
          url: x.uri,
          description: x.description
        }
      })
    setCollections(data)
  }

  const loadContracts = () => {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    collectionContract = new ethers.Contract(collectionAddress, Collection.abi, signer)
  }

  useEffect(() => {
    loadContracts()
    getCollection(1)
  }, [])

  return (
    <div class="bg-dark">
      <h1 class="text-center text-light pt-2 pb-5">Explore Collections</h1>
      <div class="container my-5 mx-auto d-flex justify-content-around ">
        {
          categories.map(category => {
            return (
              <div className={`btn ${category.categoryId == categoryId ? 'btn-light text-dark' : 'btn-dark text-light'} btn-lg border border-white`} onClick={() => handleCategory(category.categoryId)} >{category.name}</div>
            )
          })
        }
      </div>
      {/* ---------------------------------------------- */}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 pt-5">
          {
            collections.map(collection => {
              return (
                <div class="btn col" onClick={() => router.push(`/collection/${collection.collectionId}`)}>
                  <div class="card bg-dark border-primary">
                    <img
                      src={collection.url}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      class="card-img-top"
                    />
                    <Image
                      src={require('../images/nft_1.jpg')}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                      class="img2 img-fluid img-thumbnail rounded"
                    />
                    <div class="card-body">
                      <h5 class="card-title text-center text-light">{collection.name}</h5>
                      <br />
                      <p class="text-center text-primary">By HAPEBEAST</p>
                      <p class="text-muted d-flex flex-start">{collection.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

