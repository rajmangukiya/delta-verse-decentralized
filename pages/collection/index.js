import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import React from 'react';
import Navbar from '../Navbar';
import logo from '../../images/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Footer from '../Footer';
import Image from 'next/image'
import { withRouter } from 'next/router'
import { collectionAddress } from '../../config.js'

import Collection from '../../artifacts/contracts/Collection.sol/Collection.json'
import { useRouter } from 'next/router';
import { categories } from '../../helpers';


let provider, signer, collectionContract;

const CollectionIndex = (req) => {

  // const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState(1)
  const [collections, setCollections] = useState([])

  const router = useRouter()
  const state = router.state

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
    req.router.query.category && setCategoryId(parseInt(req.router.query.category))
  }, [])

  useEffect(() => {
    loadContracts()
    getCollection(1)
  }, [])

  return (
    <div class="bg-dark">
      <h1 class="text-center text-light pt-2 pb-5">Explore Collections</h1>
      <div class="container my-5 mx-auto d-flex justify-content-around">
        {
          categories.map(category => {
            return (
              <div className={`${category?.categoryId == categoryId ? 'bg-light text-dark' : 'bg-dark text-light'} px-4 py-2 shadow-lg rounded-3`} style={{ cursor: "pointer" }} onClick={() => handleCategory(category.categoryId)} >{category.name}</div>
            )
          })
        }
      </div>
      {/* ---------------------------------------------- */}
      <div class="p-5">
        <div class="d-flex flex-nowrap justify-content-around">
          {
            collections.map(collection => {
              return (
                <div class="bg-dark shadow-lg m-2 d-flex flex-column align-items-center" style={{ width: '400px', borderRadius: '10px', cursor: 'pointer'}} onClick={() => router.push(`collection/${collection.collectionId}`)}>
                  <div className='w-100' style={{height: '300px'}}>
                    <img
                      src={collection.url}
                      alt="Picture of the author"
                      style={{ width: '100%', height: '100%', borderRadius: '10px 10px 0px 0px'}}
                    />
                  </div>
                  <img
                    src={collection.url}
                    alt="Picture of the author"
                    style={{borderRadius: '20px',transform: 'translateY(-50px)'}}
                    width={100}
                    height={100}
                  />
                    <h5 class="text-center text-light">{collection.name}</h5>
                    <p class="text-center text-primary">By HAPEBEAST</p>
                    <p class="text-muted d-flex flex-start">{collection.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(CollectionIndex)