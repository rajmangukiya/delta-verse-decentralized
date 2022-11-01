import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import "bootstrap/dist/css/bootstrap.min.css";
import l from "../../../images/l.png";
import Image from 'next/image'
import Link from "next/link";
import Collection from '../../Collection';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Creation from '../../Creation';
import { useRouter } from 'next/router';
import { nftmarketaddress, nftaddress, collectionAddress } from '../../../config.js'

import NFT from '../../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../../artifacts/contracts/Market.sol/NFTMarket.json'
import BuyNftDes from '../../../components/BuyNftDes';
import SellNftDes from '../../../components/SellNftDes';

let provider, signer, nftContract, marketContract;

export default function nftinfo() {
  const router = useRouter()
  const query = router.query
  const [nftData, setNftData] = useState()
  const [itemData, setItemData] = useState()
  const [price, setPrice] = useState()
  const [signerAddress, setSignerAddress] = useState()

  const getNftData = async () => {
    let data = await nftContract.getNft(query.nftId)
    data = {
      tokenId: data.tokenId,
      image: data.uri,
      name: data.name,
      collectionId: data.collectionId,
      rarity: data.rarity.toNumber(),
      owner: data.owner,
      description: data.description,
      isSold: data.isSold
    }
    setNftData(data)
    data = await marketContract.getMarketItem(query.nftId)
    if (data[0].toNumber()) {
      data = {
        onSale: data.onSale,
        price: data.price,
        owner: data.owner
      }
      setItemData(data)
    }
  }

  const loadContracts = () => {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    signer.getAddress().then(data => setSignerAddress(data))
    nftContract = new ethers.Contract(nftaddress, NFT.abi, signer)
    marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
  }

  const addToMarket = async () => {
    await marketContract.createMarketItem(nftaddress, nftData.tokenId, price)
    console.log('nft added to market');
  }

  const buyNft = async () => {
    const price = ethers.utils.parseUnits(itemData.price.toString(), 'ether')
    console.log(nftaddress, nftData?.tokenId);
    await marketContract.createMarketSale(nftaddress, nftData?.tokenId.toNumber(), {
      value: price
    })
    console.log('nft bought');
  }

  useEffect(() => {
    loadContracts()
  }, [])

  useEffect(() => {
    (query.nftId) && getNftData()
  }, [query])

  return (
    <div class="bg-dark">
      <div class="container w-75">
        <div class="row py-5">
          <div class="col-6 p-auto m-auto d-flex justify-content-start ">
            <div class="card">
              <img
                src={nftData?.image}
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
              {nftData?.name}
            </h2>
            <h6 class="text-muted">
              owned by {nftData?.owner}
            </h6>
            {
              (!(nftData?.isSold) || nftData?.owner == signerAddress)
                ? <SellNftDes setPrice={setPrice} addToMarket={addToMarket} />
                : <BuyNftDes buyNft={buyNft} itemData={itemData} />
            }
          </div>
        </div>
        <div class="row">
          <div class="col-6 d-flex justify-content-start p-auto">
            <div class="bg-dark text-white p-3 border border-light rounded">
              <h5 class="text-white">Description</h5>
              <h6 class="text-muted">{nftData?.description}</h6>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-6 d-flex justify-content-start p-auto">
            <div class="bg-dark text-white p-3 border border-light rounded">
              <h5 class="text-white">Rarity</h5>
              <h6 class="text-muted">{nftData?.rarity}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="justify-content-center d-flex">
        <div onClick={() => {
          router.push(`/collection/${nftData?.collectionId}`)
        }}>
          <div type="button" class="text-light bg-primary px-4 py-2 rounded-1">
            view collection
          </div>
        </div>
      </div>
    </div>
  )
}
