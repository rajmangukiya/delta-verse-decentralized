import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Select from 'react-select'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png";
import Navbar from './Navbar';
import Image from 'next/image'
import Link from "next/link"
import image from '../images/allmonkey.jpg'
import ipfs from '../helpers/ipfs.js'
import { nftmarketaddress, nftaddress, collectionAddress } from '../config.js'
import Collection from '../artifacts/contracts/Collection.sol/Collection.json'
import { categories } from '../helpers'
import { uploadFile } from '../helpers/uploadFile'

export default function nft() {
    const [collectionData, setCollectionData] = useState({
        name: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpZhf1DoS2nvxJ60BjmfI7BBAJAgRL6BOrD5WqbvaX_OvbBYbw-IoAweS8eWCu5eZgF4&usqp=CAU',
        description: '',
        category: null
    })
    const [file, setFile] = useState()
    // const [categories, setCategories] = useState([])
    const categoryOption = categories.map(category => {
        return {
            label: category.name,
            value: category.categoryId,
        }
    })
    const createCollection = async (e) => {
        e.preventDefault()
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        if (!file) {
            console.log('no file available');
            return
        }
        const url = await uploadFile(file)
        console.log(url);
        // const created = await ipfs.add(file);
        // const url = `https://ipfs.io/ipfs/${created.path}`;
        const collectionContract = new ethers.Contract(collectionAddress, Collection.abi, signer)
        const tx = await collectionContract.createCollection(url, collectionData.category, collectionData.name, collectionData.description)
        await tx.wait()
        console.log('collection created');
    }

    useEffect(() => {
        // getToken()
        // console.log('imageBuffer', imageBuffer);
    }, [])

    return (
        <div className='bg-dark p-5'>
            <div class="container bg-dark text-light w-50">
                <h1 class="text-center py-3">Create new Collection</h1>
                <br />
                <form className='p-5 h-100'>
                    <div class="row mb-5">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" onChange={(e) => { setCollectionData({ ...collectionData, name: e.target.value }) }} class="form-control" id="name" />
                        </div>
                    </div>
                    <div class="row mb-5">
                        <label for="image" class="col-sm-2 col-form-label">Image</label>
                        <div class="col-sm-10">
                            <label role="button" tabindex="0" for="image" class="col-sm-2 col-form-label">
                                <img
                                    src={collectionData.image}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    class="d-inline-block align-text-top"
                                />
                            </label>
                            <input
                                type="file"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setFile(e.target.files[0])
                                        setCollectionData({ ...collectionData, image: URL.createObjectURL(e.target.files[0]) })
                                    }
                                }}
                                class="form-control d-none"
                                id="image" />
                        </div>
                    </div>
                    <div class="row mb-5">
                        <label for="description" class="col-sm-2 col-form-label">Description</label>
                        <div class="col-sm-10">
                            <textarea onChange={(e) => { setCollectionData({ ...collectionData, description: e.target.value }) }} class="form-control" rows="3" id="description" />
                        </div>
                    </div>
                    <div class="row mb-5">
                        <label for="collection" class="col-sm-2 col-form-label">Catgeory</label>
                        <div class="col-sm-10">
                            <Select
                                className='text-dark'
                                options={categoryOption}
                                name="category"
                                onChange={(e) => setCollectionData({ ...collectionData, category: e.value })}
                            />
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                        <btn onClick={createCollection} class="bg-primary px-4 py-2" style={{ cursor: 'pointer' }}>
                            create
                        </btn>
                    </div>
                </form>
            </div>
        </div>
    )
}
